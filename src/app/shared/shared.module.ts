import { HeroService } from './hero.service';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    HttpModule,
  ],
  providers: [HeroService]
})
export class SharedModule { }
