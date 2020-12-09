import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';
import {MessageService} from '../services/message.service';



@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  contentList: Content[];
  inputSearch:string;
  selectedContent: Content;
    
  constructor(private contentService: ContentService, private messageService: MessageService) {



   }


  ngOnInit(): void {
        this.contentList = [];
        this.getTheContentsList();
  }
  getTheContentsList(): void{
    this.contentService.getContents().subscribe(gl => {
      this.contentList = gl;
    });
  }

  addContentToList(newContentFromChild: Content): void {
    this.contentList.push(newContentFromChild);
    this.contentList = Object.assign([], this.contentList);
  }
  updateTheList(message: string): void{
    console.log(message);
    this.getTheContentsList();
  }

}
