import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }                 from '@angular/router';

@Component({
  selector: 'study',
  templateUrl: './deadlines.component.html',
  styleUrls: [ './login.component.css' ]
})

export class DeadlinesComponent implements OnInit {

    errorMessage: string = ''; 
    private sub: any;
    studentID: number;
    student: Student;
    
    spring_2017: boolean = false;
    fall_2017: boolean = false;
    spring_2018: boolean = false;
    fall_2018: boolean = false;

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
                      student =>{ this.student = student,
                      error =>  this.errorMessage = <any>error;
                    if(student.projectstart == "2017-spring") {
                        this.spring_2017 = true;
                    } else if (student.projectstart == "2017-fall") {
                        this.fall_2017 = true;
                    } else if (student.projectstart == "2018-spring") {
                        this.spring_2018 = true;
                    } else if (student.projectstart == "2018-fall") {
                        this.fall_2018 = true;
                    }
                
            });
  }

  save(): void {
      this.studentService.update(this.student)
        .then(() => this.gotoNext());
    }
  gotoNext(): void {
    this.router.navigate(['/projectstart', this.student.id]);
  }

}
