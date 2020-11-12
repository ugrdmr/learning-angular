import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FormsModule } from '@angular/forms';
import { SearchTypePipe } from './search-type.pipe';
import { SearchTitlePipe } from './search-title.pipe';
import { HoverStyleDirective } from './hover-style.directive';
import { CardHoverDirective } from './card-hover.directive';
import { CreateConentComponent } from './create-conent/create-conent.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    SearchTypePipe,
    SearchTitlePipe,
    HoverStyleDirective,
    CardHoverDirective,
    CreateConentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ContentListComponent]
})
export class AppModule { }
