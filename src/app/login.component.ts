import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})

export class LogInComponent {
  errorMessage: string = '';
  students: Student[] = [];
  myStudent: Student;
  myTestStudent: Student;
  constructor(private studentService: StudentService) { }

    add(email: string, password: string): void {
      this.myStudent = new Student();
      this.myStudent.email =email.trim();
      this.myStudent.password=password;

    this.getStudentByEmail(email);
      if (!email || !password || this.myTestStudent) { return; }
        this.studentService.create(this.myStudent)
          .then(student => {
        this.students.push(student);
        
      });
     
   }
   getStudentByEmail(email) {
    this.studentService.getStudent(email) 
                   .then(
                     student => this.myTestStudent = student,
                     error =>  this.errorMessage = <any>error);
  }
}
