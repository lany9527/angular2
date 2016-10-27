import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})

// interface NavLis {
//     path: string,
//     title: string
//   }

export class AppHeadComponent implements OnInit{ 
  
  navLis: any[];

  constructor(){
    this.navLis = [
      {path: '/', title: '首 页'},
      {path: '/trade', title: '1111'},
      {path: '/trade/BTC/proxy', title: '2222'},
      {path: '/trade/BTC/proxy', title: '3333'},
      {path: '/trade/BTC/proxy', title: '4444'},
      {path: '/trade/BTC/proxy', title: '5555'},
      {path: '/trade/BTC/proxy', title: '6666'}
    ]
  }

  ngOnInit() {
  }
}