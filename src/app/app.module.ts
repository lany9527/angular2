import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { AppHeadComponent } from './components/head/head.component'



import { HighlightDirective } from './directives/highlight.directive'

import { UserService } from './services/user.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    AppHeadComponent
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
