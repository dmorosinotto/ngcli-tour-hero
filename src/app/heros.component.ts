import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'my-heroes',
  styleUrls: ['./app.component.css'],
  template: `
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <div *ngIf="selectedHero">
    <h2>
      {{selectedHero.name | uppercase}} is my hero
    </h2>
    <button (click)="gotoDetail()">View Details</button>
  </div>
  `
})
export class HerosComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router: Router, private heroService: HeroService) { 
  }
  
  ngOnInit() {
    this.heroService.getHeroesSlowly()
      .then(data => this.heroes = data);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
