import { Component, OnInit } from '@angular/core';
import '../../public/css/styles.css';

import { Hero } from './components/hero/hero.component';
import { HeroService } from './services/hero/hero.service';
import { MyCurrencyPipe } from './pipe/my-currency.pipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService, MyCurrencyPipe]

})
export class AppComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  balanceAmount: number;
  constructor(private heroService: HeroService, private myCurrencyPipe: MyCurrencyPipe) {

    //input format
    this.balanceAmount = this.myCurrencyPipe.transform('1234567.89');
    // this.balanceAmount = 1234567.89;
  }

  changeModel(ev: any) {
    this.balanceAmount = ev
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  ngOnInit(): void {
    this.getHeroes()
  }

}
