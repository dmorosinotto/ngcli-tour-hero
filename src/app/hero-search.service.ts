import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Hero[]> {
    const urlLike = `${environment.heroesUrl}/?name_like=${term}`
    return this.http
               .get(urlLike)
               .map(response => response.json() as Hero[]);
  }
}