import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'study',
  templateUrl: './study.component.html',
  styleUrls: [ './login.component.css' ]
})

export class StudyComponent implements OnInit {

  students: Student[] = [];
  myStudent: Student;
  constructor(private studentService: StudentService) { }
  ngOnInit(): void {
  }

}
