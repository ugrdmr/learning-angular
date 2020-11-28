import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Console } from 'console';
import {Content} from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {
  @Output() newEvent = new EventEmitter<Content>();
  newContent: any;
  error : string;

  constructor(private contentService: ContentService) {
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
    let item: Content;
    if(this.newContent.title.trim() === '' || this.newContent.author.trim() === '' || this.newContent.body.trim() === '' || this.newContent.type.trim() === ''){
        this.error = 'Please fill title, body, type and author fields.'
    }
    else{
        console.log('emitted', this.newContent.title);
        this.contentService.addItem(this.newContent).subscribe(serverItem => {
          
          item = serverItem;
        
          this.newEvent.emit(item);
        });
        this.error = 'Content was added successfully.';
      }
  }
}
