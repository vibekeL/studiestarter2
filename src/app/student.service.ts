import { Injectable }    from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Student } from './student';
import { RequestOptions } from '@angular/http';

@Injectable()
export class StudentService {
  
  private studentByEmailUrl = 'http://gyring.org/readStudent.php';
  private studentByIdUrl = 'http://gyring.org/readStudentById.php';
  private studentCreateUrl = 'http://gyring.org/createStudent.php';
  private studentUpdateUrl = 'http://gyring.org/updateStudent.php';
  private studentsListUrlPHP = 'http://gyring.org/listStudents.php';
  private studentsMatchUrl = 'http://gyring.org/matchStudent.php';

  constructor(private http: Http) { }

  getStudents (): Promise<Student[]> {
    return this.http.get(this.studentsListUrlPHP)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
}

matchStudents (student: Student): Promise<Student[]> {
  const url = `${this.studentsMatchUrl}?line=${student.line}&projectstart=${student.projectstart}&help=${student.help}&topic1=${student.topic1}&topic2=${student.topic2}&topic3=${student.topic3}&topic4=${student.topic4}&topic5=${student.topic5}`;
    return this.http.get(url)
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

  getStudent(email: string): Promise<Student> {
    const url = `${this.studentByEmailUrl}?email=${email}`;
    return this.http.get(url)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
}

getStudentByID(id: number): Promise<Student> {
    const url = `${this.studentByIdUrl}?id=${id}`;
    return this.http.get(url)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
}

  private headers = new Headers({'Content-Type': 'application/json'});

  update(student: Student): Promise<Student> {
     const url = `${this.studentUpdateUrl}?id=${student.id}&name=${student.name}&email=${student.email}&password=${student.password}
                &city=${student.city}&line=${student.line}&projectstart=${student.projectstart}&onesemester=${student.onesemester}&alone=${student.alone}
                &help=${student.help}&gender=${student.gender}&age=${student.age}&topic1=${student.topic1}&topic2=${student.topic2}
                &topic3=${student.topic3}&topic4=${student.topic4}&topic5=${student.topic5}&thises_description=${student.thises_description}
                &personal_description=${student.personal_description}&gender_pref=${student.gender_pref}&age_from_pref=${student.age_from_pref}&age_to_pref=${student.age_to_pref}`;
     return this.http.get(url)
                  .toPromise()
                  .then(this.extractData) 
                  .catch(this.handleError);
  }

create(student: Student): Promise<Student> {
  const url = `${this.studentCreateUrl}?email=${student.email}&password=${student.password}`;
  return this.http.get(url)
                  .toPromise()
                  .then(this.extractData) 
                  .catch(this.handleError);
  }


}
