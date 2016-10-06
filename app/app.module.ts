import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './components/app/app';
import { ContactComponent } from './components/shared/contact/contact';
import { ListComponent } from './components/shared/list/list';

@NgModule({
  imports: [ BrowserModule, NgbModule, HttpModule ],
  declarations: [
    AppComponent,
    ContactComponent,
    ListComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
