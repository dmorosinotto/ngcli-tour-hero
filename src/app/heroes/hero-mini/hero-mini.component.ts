import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Hero } from "../../shared/hero";

@Component({
  selector: 'my-hero-mini',
  templateUrl: './hero-mini.component.html',
  styleUrls: ['./hero-mini.component.css']
})
export class HeroMiniComponent {
  @Input() hero: Hero;

  constructor(private router: Router, private route: ActivatedRoute) { }

  gotoDetail(): void {
    this.router.navigate(['../detail', this.hero.id], { relativeTo: this.route });
  }

}
