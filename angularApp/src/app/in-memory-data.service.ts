import { Injectable } from '@angular/core';
import {Content} from './helper-files/content-interface';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {CONTENTLIST} from './helper-files/contentDB';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb(): object {
    const content: Content[] = CONTENTLIST;
    return {content};
  }
  getId(content: Content[]): number {
    return content.length > 0 ?
      Math.max(...content.map(contents => contents.id)) + 1
      : 100;
  }
}
