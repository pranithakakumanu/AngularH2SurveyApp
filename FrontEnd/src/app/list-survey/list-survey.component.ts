// This is where we get the data of all surveys. 
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: ['./list-survey.component.css']
})
export class ListSurveyComponent implements OnInit {
  surveyData = [];
  constructor(private service: ApiServiceService) { }

  ngOnInit(): void {
    this.service.getData().subscribe((data: any) => {
      console.log(data)
      this.surveyData = data;

    });
  }

  likes(data:any) {
    if(!!data) {
      return data.join(',');
    } else {
      return '';
    }
  }

}
