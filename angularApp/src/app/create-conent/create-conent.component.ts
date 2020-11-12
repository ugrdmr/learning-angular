import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Content} from '../helper-files/content-interface';

@Component({
  selector: 'app-create-conent',
  templateUrl: './create-conent.component.html',
  styleUrls: ['./create-conent.component.scss']
})
export class CreateConentComponent implements OnInit {
  @Output() newEvent = new EventEmitter<Content>();
  newContent: Content;
  error : string;

  constructor() {
    this.newContent = {
      id:0,
      title: '',
      body: '',
      type: '',
      author: '',
      imgUrl: ''
    };

   }

  ngOnInit(): void {
  }

  addContent(): void{
    const promise = new Promise((success, fail) =>{
      if(this.newContent.title.trim() === '' || this.newContent.author.trim() === '' || this.newContent.body.trim() === '' || this.newContent.type.trim() === ''){
        fail('Failure');
        this.error = 'Please fill title, body, type and author fields.'
      }
      else{
        console.log('emitted', this.newContent.title);
        this.newEvent.emit(this.newContent);
        success('Success');
        this.error = 'Content was added successfully.';
      }
    });
    promise.then((success) => console.log(success),
      (fail) => console.log(fail)
    );
  }
}
