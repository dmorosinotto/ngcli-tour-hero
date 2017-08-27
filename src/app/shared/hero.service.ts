import { environment } from '../../environments/environment';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  
  constructor(private http: Http) { }
  
  getHeroes(): Promise<Hero[]> {
    return this.http.get(environment.heroesUrl)
               .toPromise()
               .then((res: Response) => res.json() as Hero[])
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    const url = `${environment.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Hero)
      .catch(this.handleError);
  }

  
  update(hero: Hero): Promise<Hero> {
    const url = `${environment.heroesUrl}/${hero.id}`;
    return this.http
    .put(url, hero)
    .toPromise()
    .then(() => hero)
    .catch(this.handleError);
  }
  

  private headers = new Headers({'Content-Type': 'application/json'});
  create(name: string): Promise<Hero> {
    return this.http
      .post(environment.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json() as Hero)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${environment.heroesUrl}/${id}`;
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}