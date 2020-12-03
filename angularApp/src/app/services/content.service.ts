import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CONTENTLIST } from '../helper-files/contentDB';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient, private messageService: MessageService) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type':
        'application/json'
    })
  };


  getContents(): Observable<Content[]> {
    return this.http.get<Content[]>('api/fred');
  }
  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>("api/fred", content, this.httpOptions);
  }
}
