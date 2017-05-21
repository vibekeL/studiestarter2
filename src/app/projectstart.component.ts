import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'study',
  templateUrl: './projectstart.component.html',
  styleUrls: [ './login.component.css' ]
})

export class ProjectstartComponent implements OnInit {

  students: Student[] = [];
  myStudent: Student;
  constructor(private studentService: StudentService) { }
  ngOnInit(): void {
  }

}
