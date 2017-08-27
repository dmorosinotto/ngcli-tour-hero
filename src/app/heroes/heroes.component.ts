import { Component, OnInit } from '@angular/core';
import { Hero } from "../shared/hero";
import { HeroService } from "../shared/hero.service";

@Component({
  selector: 'my-heroes',
  template: `
  <h2>My Heroes</h2>
  <my-hero-add (onAdd)="add($event)"></my-hero-add>
  <my-hero-list 
    [list]="heroes"
    [(sel)]="selectedHero" 
    (onDelete)="delete($event)">
  </my-hero-list>
  <my-hero-mini [hero]="selectedHero"></my-hero-mini>
  `
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
  
    constructor(private heroService: HeroService) { 
      this.selectedHero = null;
    }
    
    ngOnInit() {
      this.heroService.getHeroesSlowly()
        .then(data => this.heroes = data);
    }
  
    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.heroService.create(name)
        .then(hero => {
          this.heroes.push(hero);
          this.selectedHero = null;
        });
    }
  
    delete(hero: Hero): void {
      this.heroService
          .delete(hero.id)
          .then(() => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) { this.selectedHero = null; }
          });
    }
}
