import { SharedModule } from './shared/shared.module';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroSearchService } from './hero-search.service';
import { HeroSearchComponent } from './hero-search.component';

@NgModule({
  declarations: [
    AppComponent, DashboardComponent, HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [HeroSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
