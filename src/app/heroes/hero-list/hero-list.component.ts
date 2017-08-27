import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from "../../shared/hero";

@Component({
  selector: 'my-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {

  @Input() list: Hero[];
  @Input() sel: Hero;
  @Output() selChange = new EventEmitter<Hero>()
  @Output() onDelete = new EventEmitter<number>()
  
  constructor() { }

  onSelect(hero: Hero): void {
    this.sel = hero;
    this.selChange.emit(hero);
  }
}
