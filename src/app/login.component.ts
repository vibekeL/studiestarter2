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
  students: Student[] = [];
  myStudent: Student;
  constructor(private studentService: StudentService) { }

  add(email: string, password: string): void {   
      this.myStudent = new Student();
      this.myStudent.email =email.trim();
      this.myStudent.password=password.trim();
      this.students = [];

      this.getStudentByEmail(email, password);
      if (!email || !password) { 
        return; 
      } else {
          this.studentService.create(this.myStudent)
            .then(student => { this.students.push(student);
            alert("Ny bruger oprettet");
             alert("ROUTE til anden side her med id " + this.students[0].id);
          }); 
      }  
   }
   ngOnInit(): void {
    this.studentService.getStudents ()
              .then(
                     students => this.students = students,
                     error =>  this.errorMessage = <any>error);
  }
   getStudentByEmail(email, password) {
    this.studentService.getStudent(email) 
                  .then(student => { this.students.push(student);
                if(password != this.students[0].password) {
                  alert("Forkert password!");
                } else {
                  alert("ROUTE til anden side her" )
                }
          });
                     
  }

/*
  getStudentByEmail(email) {
    this.myTestStudent =new Student();
    this.studentService.getStudent(email) 
                   .then(
                     student => this.myTestStudent = student,
                     error =>  this.errorMessage = <any>error);
                     alert("2" +this.myTestStudent.password);
                     
  }
  */
}
