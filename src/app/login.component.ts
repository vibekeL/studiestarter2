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
  myTestStudent: Student;
  constructor(private studentService: StudentService) { }

  add(email: string, password: string): void {   
      this.myStudent = new Student();
      this.myStudent.email =email.trim();
      this.myStudent.password=password.trim();

      this.getStudentByEmail(email);
      alert("1" + this.myTestStudent.password);
      if (!email || !password || this.myTestStudent.password) { 
        alert("4" + this.myTestStudent.password);
        return; 
      } else {
        alert("3" + this.myTestStudent.password);
          this.studentService.create(this.myStudent)
            .then(student => { this.students.push(student);}); 
      }  
   }
   ngOnInit(): void {
    this.studentService.getStudents ()
              .then(
                     students => this.students = students,
                     error =>  this.errorMessage = <any>error);
  }
   getStudentByEmail(email) {
    this.myTestStudent =new Student();
    this.studentService.getStudent(email) 
                   .then(
                     student => this.myTestStudent = student,
                     error =>  this.errorMessage = <any>error);
                     alert("2" +this.myTestStudent.password);
                     
  }
}
