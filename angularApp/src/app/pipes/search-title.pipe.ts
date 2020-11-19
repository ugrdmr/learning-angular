import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Pipe({
  name: 'searchTitle'
})
export class SearchTitlePipe implements PipeTransform {

  transform(contentItem: Content, searchedTitle?: string):boolean {
    if(searchedTitle){
        if (contentItem.title.toLowerCase().includes(searchedTitle.toLowerCase())){
          console.log( searchedTitle + " exists")
          return true;
        }
    }
    return false;
  }

}
