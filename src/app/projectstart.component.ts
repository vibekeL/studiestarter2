import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }                 from '@angular/router';

@Component({
  selector: 'projectstart',
  templateUrl: './projectstart.component.html',
  styleUrls: [ './login.component.css' ]
})

export class ProjectstartComponent implements OnInit {

  errorMessage: string = '';
  private sub: any;
  studentID: number;
  student: Student;
// test
 constructor(private studentService: StudentService, private router: Router,
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

  save(): void {
      this.studentService.update(this.student)
        .then(() => this.gotoNext());
    }
  gotoNext(): void {
    this.router.navigate(['/projectstart', this.student.id]);
  }
  goBack(): void {
     this.location.back();
  }
}
