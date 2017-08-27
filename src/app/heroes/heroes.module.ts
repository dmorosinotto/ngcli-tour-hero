import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroAddComponent } from './hero-add/hero-add.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroMiniComponent } from './hero-mini/hero-mini.component';
import { HeroesComponent } from './heroes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HeroesRoutingModule
  ],
  declarations: [HeroListComponent, HeroAddComponent, HeroDetailComponent, HeroMiniComponent, HeroesComponent],
  exports: [HeroesComponent]
})
export class HeroesModule { }
