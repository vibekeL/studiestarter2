// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Student } from './student';
import { StudentService } from './student.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: [ './student-detail.component.css' ],
})

export class StudentDetailComponent implements OnInit {

errorMessage: string = '';
private sub: any;
studentID: number;

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
        this.studentID = +params['id']; // (+) converts string 'id' to a number
    });
      this.getMyStudent(this.studentID);
  }

  getMyStudent(id: number) {
    this.studentService.getStudentByID(id) 
                   .then(
                     student => this.student = student,
                     error =>  this.errorMessage = <any>error);
}

  constructor(
      private studentService: StudentService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    goBack(): void {
      this.location.back();
    }

    save(): void {
      this.studentService.update(this.student)
        .then(() => this.goBack());
    }


  @Input() student: Student;
}
