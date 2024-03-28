import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'survey';
  constructor(private router: Router) {}

  survey() {
    console.log("survey");
    this.router.navigate(['survey']);
  }

  listSurvey() {
    this.router.navigate(['list-survey']);
  }
}
