import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { ListSurveyComponent } from './list-survey/list-survey.component';

const routes: Routes = [
  { path: 'survey', component: SurveyFormComponent },
  { path: 'list-survey', component: ListSurveyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
