import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent }   from './login.component';
import { StudentsComponent }      from './students.component';
import { StudentDetailComponent }  from './student-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LogInComponent },
  { path: 'detail/:id', component: StudentDetailComponent },
  { path: 'students',     component: StudentsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
