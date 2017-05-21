import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
   template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/login" routerLinkActive="active">LogIn</a>
    <a routerLink="/study" routerLinkActive="active">Studieretning</a>
    <a routerLink="/projectstart" routerLinkActive="active">Projekt start</a>
    <a routerLink="/onesemester" routerLinkActive="active">One or several</a>
    <a routerLink="/alone" routerLinkActive="active">On your own</a>
    <a routerLink="/alone" routerLinkActive="summery">Resume</a>
    <a routerLink="/students" routerLinkActive="active">Students</a>
  </nav>
  <router-outlet></router-outlet>
`,
styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Studie starter'; 
}