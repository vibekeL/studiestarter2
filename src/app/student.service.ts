import { Injectable }    from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Student } from './student';
import { RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Rx';

@Injectable()
export class StudentService {
  
  //private heroesUrl = 'api/heroes';  // URL to web api
  private heroesListUrlPHP = 'http://gyring.org/getHeroes.php';
  private heroByIdPHP = 'http://gyring.org/getHeroById.php';
  private heroAddPHP = 'http://gyring.org/addHero.php';
  private heroDeletePHP = 'http://gyring.org/deleteHero.php';
  private heroUpdatePHP = 'http://gyring.org/updateHero.php';

  constructor(private http: Http) { }

  getStudents (): Promise<Student[]> {
    return this.http.get(this.heroesListUrlPHP)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
}

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

  getStudent(id: number): Promise<Student> {
    const url = `${this.heroByIdPHP}?id=${id}`;
    return this.http.get(url)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
}

  private headers = new Headers({'Content-Type': 'application/json'});

  update(student: Student): Promise<Student> {
     const url = `${this.heroUpdatePHP}?id=${student.id}&name=${student.name}&age=${student.age}`;
     return this.http.get(url)
                  .toPromise()
                  .then(this.extractData) 
                  .catch(this.handleError);
  }

create (name: string, age: number): Promise<Student> {
  const url = `${this.heroAddPHP}?name=${name}&age=${age}`;
  return this.http.get(url)
                  .toPromise()
                  .then(this.extractData) 
                  .catch(this.handleError);
}

 delete(id: number): Promise<void> {
    const url = `${this.heroDeletePHP}?id=${id}`;
    return this.http
      .post(url, "", {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }


}
