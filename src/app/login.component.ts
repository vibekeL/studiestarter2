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
  constructor(private studentService: StudentService) { }
  ngOnInit(): void {
    this.studentService.getStudents()
      .then(students => this.students = students.slice(1, 5));
  }
}
