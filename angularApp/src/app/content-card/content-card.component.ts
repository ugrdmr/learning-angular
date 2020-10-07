import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
})
export class ContentCardComponent implements OnInit {
  
  contentList: ContentList;
  displayHTML:string="";

  constructor() { 
    this.contentList = new ContentList();
    this.contentList.add({
      id: 0,
      author:'Ugur Demir',
      title: 'Lorem ipsum dolor sit amet.',
      imgUrl:'https://source.unsplash.com/random/300×300',
      body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan dolor id nunc consectetur molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis leo at erat posuere facilisis. Suspendisse malesuada nulla est, quis suscipit nisl pulvinar at. Aliquam convallis nulla non mauris viverra placerat. Donec sollicitudin ut mauris non laoreet. Curabitur feugiat mattis nulla, non tempus est iaculis eget. Cras a dolor ornare, finibus felis vitae, fermentum tortor. Praesent tincidunt in lectus ac congue. Nullam ut tempor lectus, in malesuada tellus. Curabitur ut posuere massa.'
    });
    this.contentList.add({
      id: 1,
      author:'Ugur Demir2',
      title: 'Lorem ipsum dolor sit amet.',
      imgUrl:'https://source.unsplash.com/random/300×300',
      body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan dolor id nunc consectetur molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis leo at erat posuere facilisis. Suspendisse malesuada nulla est, quis suscipit nisl pulvinar at. Aliquam convallis nulla non mauris viverra placerat. Donec sollicitudin ut mauris non laoreet. Curabitur feugiat mattis nulla, non tempus est iaculis eget. Cras a dolor ornare, finibus felis vitae, fermentum tortor. Praesent tincidunt in lectus ac congue. Nullam ut tempor lectus, in malesuada tellus. Curabitur ut posuere massa.'
    });
    this.contentList.add({
      id: 2,
      author:'Ugur Demir3',
      title: 'Lorem ipsum dolor sit amet.',
      imgUrl:'https://source.unsplash.com/random/300×300',
      body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan dolor id nunc consectetur molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis leo at erat posuere facilisis. Suspendisse malesuada nulla est, quis suscipit nisl pulvinar at. Aliquam convallis nulla non mauris viverra placerat. Donec sollicitudin ut mauris non laoreet. Curabitur feugiat mattis nulla, non tempus est iaculis eget. Cras a dolor ornare, finibus felis vitae, fermentum tortor. Praesent tincidunt in lectus ac congue. Nullam ut tempor lectus, in malesuada tellus. Curabitur ut posuere massa.'
    });
    this.contentList.add({
      id: 3,
      author:'Ugur Demir4',
      title: 'Lorem ipsum dolor sit amet.',
      imgUrl:'https://source.unsplash.com/random/300×300',
      body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan dolor id nunc consectetur molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis leo at erat posuere facilisis. Suspendisse malesuada nulla est, quis suscipit nisl pulvinar at. Aliquam convallis nulla non mauris viverra placerat. Donec sollicitudin ut mauris non laoreet. Curabitur feugiat mattis nulla, non tempus est iaculis eget. Cras a dolor ornare, finibus felis vitae, fermentum tortor. Praesent tincidunt in lectus ac congue. Nullam ut tempor lectus, in malesuada tellus. Curabitur ut posuere massa.'
    });
    this.contentList.add({
      id: 4,
      author:'Ugur Demir',
      title: 'Lorem ipsum dolor sit amet.',
      imgUrl:'https://source.unsplash.com/random/300×300',
      body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan dolor id nunc consectetur molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque quis leo at erat posuere facilisis. Suspendisse malesuada nulla est, quis suscipit nisl pulvinar at. Aliquam convallis nulla non mauris viverra placerat. Donec sollicitudin ut mauris non laoreet. Curabitur feugiat mattis nulla, non tempus est iaculis eget. Cras a dolor ornare, finibus felis vitae, fermentum tortor. Praesent tincidunt in lectus ac congue. Nullam ut tempor lectus, in malesuada tellus. Curabitur ut posuere massa.'
    });

    let contentListSize = this.contentList.size();
    for (let i = 0; i < contentListSize; i++) {
      this.displayHTML += this.contentList.show(i); 
    }

  }

  ngOnInit(): void {
  }

}
