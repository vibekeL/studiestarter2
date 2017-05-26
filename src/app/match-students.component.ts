import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';
import { Router} from '@angular/router';
import { Location }                 from '@angular/common';
import { ActivatedRoute, Params }   from '@angular/router';

@Component({
  selector: 'my-students',
  templateUrl: './match-students.component.html',
  styleUrls: [ './students.component.css' ]
})

export class MatchStudentsComponent implements OnInit {
  students: Student[];
  selectedStudent: Student;
  myStudent: Student;

  studentID: number;
  student: Student;

  private sub: any;

  errorMessage: string = '';

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
                    .then( student => { this.student = student;
                        this.matchStudents(this.student);
                      });
    }

  matchStudents(student: Student) {
    this.studentService.matchStudents(student)
                   .then(
                     students => this.students = students,
                     error =>  this.errorMessage = <any>error);
  }
  
  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedStudent.id]);
  }

   goBack(): void {
     this.location.back();
  }

}
