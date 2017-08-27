import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent {
  @Output() onAdd = new EventEmitter<string>()
}
