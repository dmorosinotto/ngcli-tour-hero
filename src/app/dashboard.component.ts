import { Hero } from './shared/hero';
import { HeroService } from './shared/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(heros => this.heroes = heros.slice(1,5))
  }

}
