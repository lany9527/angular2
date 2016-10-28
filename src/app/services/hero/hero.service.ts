import { Injectable } from '@angular/core';
import { HEROES } from '../../mock/mock-heroes'
import { Hero } from '../../components/hero/hero.component'

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }
}
