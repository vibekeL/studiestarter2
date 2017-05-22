import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppComponent }        from './app.component';
import { StudentDetailComponent } from './student-detail.component';
import { StudentsComponent }     from './students.component';
import { StudentService }   from './student.service';
import { LogInComponent }   from './login.component';
import { AppRoutingModule } from './app-routing.module';
import { StudyComponent } from './study.component';
import { ProjectstartComponent } from './projectstart.component';
import { OnesemesterComponent } from './onesemester.component';
import { HelpComponent } from './help.component';
import { SummeryComponent } from './summery.component';

import { StudentSearchComponent }    from './student-search.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LogInComponent,
    StudentDetailComponent,
    StudentsComponent,
    StudentSearchComponent,
    StudyComponent,
    ProjectstartComponent,
    OnesemesterComponent,
    HelpComponent,
    SummeryComponent,
  ],
  providers: [ StudentService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
