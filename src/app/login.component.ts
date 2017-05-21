import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})

export class LogInComponent implements OnInit {

  students: Student[] = [];
  myStudent: Student;
  constructor(private studentService: StudentService) { }
  ngOnInit(): void {
    this.studentService.getStudents()
      .then(students => this.students = students.slice(1, 5));
  }


    add(email: string, password: string): void {
     
    this.myStudent.email =email.trim();
    this.myStudent.password=password;
    if (!email || !password) { return; }
      this.studentService.create(this.myStudent)
        .then(student => {
      this.students.push(student);
      
    });
  }
}
