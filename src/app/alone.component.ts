import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'alone',
  templateUrl: './alone.component.html',
  styleUrls: [ './login.component.css' ]
})

export class AloneComponent implements OnInit {

  students: Student[] = [];
  myStudent: Student;
  constructor(private studentService: StudentService) { }
  ngOnInit(): void {
  }

}
