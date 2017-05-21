import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'summery',
  templateUrl: './summery.component.html',
  styleUrls: [ './login.component.css' ]
})

export class SummeryComponent implements OnInit {

  students: Student[] = [];
  myStudent: Student;
  constructor(private studentService: StudentService) { }
  ngOnInit(): void {
  }

}
