import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
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
  <button (click)="goBack()">Back</button>
  <button (click)="save()">Save</button>
</div>`,
styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent {
    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private location: Location,
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

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
          .then(() => this.goBack());
    }
}