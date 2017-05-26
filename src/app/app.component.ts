import { Component } from '@angular/core';
@Component({
    selector: 'app-root',
   template: `
   <table align="center"> 
   <nav>
    <a routerLink="/students" routerLinkActive="active">Alle studerende</a>
  </nav>
  <h4>{{title}}</h4>
   </table>
  
  <router-outlet></router-outlet>
`,
styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Speciale hjælper'; 
}