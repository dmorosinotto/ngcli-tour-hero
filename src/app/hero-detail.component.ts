import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Component, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  template: `
<div *ngIf="hero">
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name"/>
  </div>
</div>`
})
export class HeroDetailComponent {
    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
      )  
      {
          console.log(route.snapshot.params);
          console.log(route.snapshot.paramMap.get('id'));
      }

    ngOnInit(): void {
    this.route.paramMap
        .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
        .subscribe(hero => this.hero = hero);
    }
}