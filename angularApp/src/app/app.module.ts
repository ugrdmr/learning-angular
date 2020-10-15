import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ContentListComponent]
})
export class AppModule { }
