import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import {ContentService} from '../services/content.service';
import { MessageService } from '../services/message.service';



@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})


export class CreateComponentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<string>();
  newContent: any;
  constructor(private contentService: ContentService,private messageService: MessageService, public dialog:MatDialog) { 
    this.newContent = {
      title: '',
      imageUrl: ''
    };
  }

  ngOnInit(): void {

  }

  openCreateContentDialog():void {
    const createContentDialogRef = this.dialog.open(CreateContentDialog, {
      width: '600px'
    });

    createContentDialogRef.afterClosed().subscribe(newContentFromDialog => {
      this.newContent = newContentFromDialog;
      if(this.newContent){
        this.addContent();
      }
      
    });
  }

  addContent(): void{
    let newContentFromServer: Content;
    console.log("Trying to add the content to the list", this.newContent);
    this.contentService.addContent(this.newContent).subscribe(serverContent => {
      this.messageService.add("Added the content to the list");

      newContentFromServer = serverContent;
      newContentFromServer.tags = [newContentFromServer.tags[0]]
      this.newContentEvent.emit(newContentFromServer);
    });
  }
  

}

//Dialog component
@Component({
  selector: 'app-create-content-dialog',
  templateUrl: 'create-content-dialog.component.html',
  styleUrls: ['create-component.component.scss']
})
export class CreateContentDialog {
  newContent:any;

  constructor(
    public dialogRef: MatDialogRef<CreateContentDialog>) {
      this.newContent = {
        title: '',
        imageUrl: ''
      };
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}