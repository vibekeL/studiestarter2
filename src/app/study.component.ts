import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'study',
  templateUrl: './study.component.html',
  styleUrls: [ './login.component.css' ]
})

export class StudyComponent implements OnInit {

  errorMessage: string = '';
  private sub: any;
  studentID: number;
  student: Student;

  constructor(private studentService: StudentService,
              private route: ActivatedRoute,
            private location: Location
      ) { }
  
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
        this.studentID = +params['id']; // (+) converts string 'id' to a number
    });
      this.getStudent(this.studentID);
  }
  getStudent(id: number) {
      this.studentService.getStudentByID(id) 
                    .then(
                      student => this.student = student,
                      error =>  this.errorMessage = <any>error);
  }
  goBack(): void {
     this.location.back();
  }

  save(): void {
      alert(this.student.password+"!");
      this.studentService.update(this.student)
        .then(() => this.goBack());
    }

}
