import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';
import { Router} from '@angular/router';

@Component({
  selector: 'my-students',
  templateUrl: './students.component.html',
  styleUrls: [ './students.component.css' ]
})

export class StudentsComponent implements OnInit {
  title = 'Tour of Student';
  students: Student[];
  selectedStudent: Student;
  myStudent: Student;

  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(
    private studentService: StudentService, 
    private router: Router) { }

  /**
  getHeroesORIGINAL(): void {
    this.heroService.getHeroes().then(students => this.students = students);
  }
   /*/   

  getStudents() {
    this.studentService.getStudents()
                   .then(
                     students => this.students = students,
                     error =>  this.errorMessage = <any>error);
  }
  
  ngOnInit(): void {
    this.getStudents();
  }

  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedStudent.id]);
  }

  add(name: string, age: number): void {
    
    /*
    name = name.trim();
    if (!name || age == 0) { return; }
      this.studentService.create(name, age)
        .then(student => {
      this.students.push(student);
      this.selectedStudent = null;
    });
    */
  }

  delete(student: Student): void {
    /**
  this.studentService
      .delete(student.id)
      .then(() => {
        this.students = this.students.filter(h => h !== student);
        if (this.selectedStudent === student) { this.selectedStudent = null; }
        this.getStudents();
      });
      */
  }

}
