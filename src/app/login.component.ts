import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})

export class LogInComponent implements OnInit {
  errorMessage: string = '';
  students: Student;
  myStudent: Student;
  constructor(private studentService: StudentService) { }

  add(email: string, password: string): void {   
      this.myStudent = new Student();
      this.myStudent.email =email.trim();
      this.myStudent.password=password.trim();
      this.students = new Student();
      this.getStudentByEmail(email, password);
   }
   ngOnInit(): void {     }

  getStudentByEmail(email, password) {
    this.studentService.getStudent(email) // Try to get student by email
      .then(student => { this.students = student;
          if(this.students.id) { // Does the student exist??
            if(password != this.students.password) {
              alert("Forkert password!");
            } else {
              alert("ROUTE til anden side her med ID = "  + this.students.id + " name= " +this.students.name)
            }
          } else { // Student do not exist, so lets create it
                this.studentService.create(this.myStudent)
              .then(student => { this.students = student;
              alert("Ny bruger oprettet");
              alert("ROUTE til anden side her med id " + this.students.id);
            }); 
          }
               
        });
  }

}
