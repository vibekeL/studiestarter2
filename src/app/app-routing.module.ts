import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent }   from './login.component';
import { StudentsComponent }      from './students.component';
import { StudentDetailComponent }  from './student-detail.component';
import { StudyComponent } from './study.component';
import { ProjectstartComponent } from './projectstart.component';
import { OnesemesterComponent } from './onesemester.component';
import { HelpComponent } from'./help.component';
import { SummeryComponent } from'./summery.component';
import { DeadlinesComponent } from'./deadlines.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LogInComponent },
  { path: 'detail/:id', component: StudentDetailComponent },
  { path: 'students',     component: StudentsComponent },
  { path: 'study/:id',     component: StudyComponent },
  { path: 'projectstart/:id', component: ProjectstartComponent },
  { path: 'onesemester/:id', component: OnesemesterComponent},
  { path: 'help/:id', component: HelpComponent},
  { path: 'summery/:id', component: SummeryComponent},
  { path: 'deadlines/:id', component: DeadlinesComponent}, 
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {} 
