import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {RouterModule}   from '@angular/router';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { AppHeadComponent } from './components/head/head.component'
import { AppTradeComponent } from './view/trade/trade.component'
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component'

import { HighlightDirective } from './directives/highlight.directive'
import { MyCurrencyDirective } from './directives/my-currency.directive'
import { MyCurrencyPipe } from './pipe/my-currency.pipe'


import { UserService } from './services/user.service';
import { ProductService } from './services/product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    MyCurrencyDirective,
    MyCurrencyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  
  providers: [ UserService, ProductService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
