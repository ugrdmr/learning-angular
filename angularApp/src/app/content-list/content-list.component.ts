import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentList: Content[];

  indicator: string
  constructor() { 
    this.contentList = [
      {
        id: 0,
        author:'Ugur Demir',
        title: 'Apple',
        imgUrl:'https://i.picsum.photos/id/471/800/400.jpg?hmac=jLM_D1uf0BDcSvAlcipuPUNMB3XWZuRM9gYJ9tAyP7U',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan dolor id nunc consectetur molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis leo at erat posuere facilisis. Suspendisse malesuada nulla est, quis suscipit nisl pulvinar at. Aliquam convallis nulla non mauris viverra placerat. Donec sollicitudin ut mauris non laoreet. Curabitur feugiat mattis nulla, non tempus est iaculis eget. Cras a dolor ornare, finibus felis vitae, fermentum tortor. Praesent tincidunt in lectus ac congue. Nullam ut tempor lectus, in malesuada tellus. Curabitur ut posuere massa.',
        type: 'Manager',
        tags:["View", "Forest", "Sky"]
      },
      {
        id: 1,
        author:'Ugur Demir 1',
        title: 'Google',
        imgUrl:'https://i.picsum.photos/id/396/800/400.jpg?hmac=ojm6LuHVvka2gyK2cZsQ1XRCOTqnpBVf1ye_vinTDTk',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan dolor id nunc consectetur molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis leo at erat posuere facilisis. Suspendisse malesuada nulla est, quis suscipit nisl pulvinar at. Aliquam convallis nulla non mauris viverra placerat. Donec sollicitudin ut mauris non laoreet. Curabitur feugiat mattis nulla, non tempus est iaculis eget. Cras a dolor ornare, finibus felis vitae, fermentum tortor. Praesent tincidunt in lectus ac congue. Nullam ut tempor lectus, in malesuada tellus. Curabitur ut posuere massa.',
        type: 'Student',
        tags:["View", "Forest", "Sky"]
      },
      {
        id: 2,
        author:'Ugur Demir 2',
        title: 'Microsoft',
        imgUrl:'https://i.picsum.photos/id/482/800/400.jpg?hmac=Ya2FC9Fs-YCHJ5unq3UIPmevUEe_aq2rdrjEAw_aUjI',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan dolor id nunc consectetur molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis leo at erat posuere facilisis. Suspendisse malesuada nulla est, quis suscipit nisl pulvinar at. Aliquam convallis nulla non mauris viverra placerat. Donec sollicitudin ut mauris non laoreet. Curabitur feugiat mattis nulla, non tempus est iaculis eget. Cras a dolor ornare, finibus felis vitae, fermentum tortor. Praesent tincidunt in lectus ac congue. Nullam ut tempor lectus, in malesuada tellus. Curabitur ut posuere massa.',
        type: 'Teacher',
        tags:["Sea", "Forest", "Sky"]
      },
      {
        id: 3,
        author:'Ugur Demir 3',
        title: 'Amazon',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan dolor id nunc consectetur molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis leo at erat posuere facilisis. Suspendisse malesuada nulla est, quis suscipit nisl pulvinar at. Aliquam convallis nulla non mauris viverra placerat. Donec sollicitudin ut mauris non laoreet. Curabitur feugiat mattis nulla, non tempus est iaculis eget. Cras a dolor ornare, finibus felis vitae, fermentum tortor. Praesent tincidunt in lectus ac congue. Nullam ut tempor lectus, in malesuada tellus. Curabitur ut posuere massa.',
        type: 'Student',
        tags:["View", "Forest", "Sky"]
      },
      {
        id: 4,
        author:'Ugur Demir 4',
        title: 'Facebook',
        imgUrl:'https://i.picsum.photos/id/366/800/400.jpg?hmac=TeCemyJhWtmePes8DsS9LPtsjXRMKjZxbh00JN7tcUY',
        body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan dolor id nunc consectetur molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis leo at erat posuere facilisis. Suspendisse malesuada nulla est, quis suscipit nisl pulvinar at. Aliquam convallis nulla non mauris viverra placerat. Donec sollicitudin ut mauris non laoreet. Curabitur feugiat mattis nulla, non tempus est iaculis eget. Cras a dolor ornare, finibus felis vitae, fermentum tortor. Praesent tincidunt in lectus ac congue. Nullam ut tempor lectus, in malesuada tellus. Curabitur ut posuere massa.',
        type: 'Manager',
        tags:["View", "Forest", "Ground"]
      }
    ];
  }

  ngOnInit(): void {

  }

  cloneArray(newContentFromChild: Content): void{
    newContentFromChild.id = this.contentList.length;
    this.contentList.push(newContentFromChild);
    this.contentList = Object.assign([], this.contentList);
  }
  
}
