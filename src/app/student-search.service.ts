import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Student }       from './student';

@Injectable()
export class StudentSearchService {

  private heroByNamePHP = 'http://gyring.org/getHeroByName.php';

  constructor(private http: Http) {}

  search(term: string): Observable<Student[]> {
    const url = `${this.heroByNamePHP}?name=${term}`;
    return this.http
               .get(url)
               .map(response => response.json().data as Student[]);
  }

}
