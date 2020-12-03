import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import {FormsModule} from '@angular/forms';
import { ContentTypeEqualsPipe } from './pipes/content-type-equals.pipe';
import { ContentTitleEqualsPipe } from './pipes/content-title-equals.pipe';
import { HoverStyleDirective } from './directives/hover-style.directive';
import { HoverCardDirective } from './directives/hover-card.directive';
import { MessagesComponent } from './messages/messages.component';
import { CreateComponentComponent, CreateContentDialog } from './create-component/create-component.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentTypeEqualsPipe,
    ContentTitleEqualsPipe,
    HoverStyleDirective,
    HoverCardDirective,
    MessagesComponent,
    CreateComponentComponent,
    CreateContentDialog,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false,
        delay: 1000 }),
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  entryComponents:[CreateContentDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
