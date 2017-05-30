import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';
import { Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})

export class LogInComponent implements OnInit {
  errorMessage: string = '';
  students: Student;
  myStudent: Student;
  constructor(private studentService: StudentService, private router: Router) { }

  add(email: string, password: string): void {   
      this.myStudent = new Student();
      this.myStudent.email =email.trim();
      this.myStudent.password=password.trim();
      this.students = new Student();
      this.getStudentByEmail(email, password);
   }
   ngOnInit(): void {     }

getStudentByEmail(email, password) {
  if(email && password) {
    this.studentService.getStudent(email) // Try to get student by email
      .then(student => { this.students = student;
          if(this.students.id) { // Does the student exist??
            if(password != this.students.password) {
              alert("Forkert password!");
            } else {
              this.gotoNext();
            }
          } else { // Student do not exist, so lets create it
                this.studentService.create(this.myStudent)
              .then(student => { this.students = student;
              alert("Ny bruger oprettet");
              this.gotoNext();
            }); 
          }
               
        });
     } else {
       alert("Brugernavn og adgangskode skal udfyldes!");
     }
  }

  gotoNext(): void {
    this.router.navigate(['/study', this.students.id]);
  }

}
