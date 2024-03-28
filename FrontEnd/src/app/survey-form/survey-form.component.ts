// This is the survey Component Ts File
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit, OnChanges {
  surveyForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    streetAddress: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
    telephone: ['', Validators.required],
    email: ['', Validators.required],
    surveyDate: ['', Validators.required],
    interestedIn: [''],
    recommendation: [''],
    comments: ['']

  });

  checkboxes: FormGroup =
    this.fb.group({
      students: [false],
      location: [false],
      campus: [false],
      atmosphere: [false],
      dorm: [false],
      sports: [false]
    });
  constructor(private fb: FormBuilder,
    private service: ApiServiceService,
    private router: Router) { }

  ngOnChanges(): void {


  }

  ngOnInit(): void {
  }

  submit() {
    // console.log(this.surveyForm.getRawValue())
    if (this.surveyForm.valid) {
      let data = this.surveyForm.getRawValue();
      data.campusLikes = [];
      console.log(this.checkboxes.controls['students'].value)
      if (!!this.checkboxes.controls['students'].value && !!this.checkboxes.controls['students'].value == true) {
        data.campusLikes.push('Students');
      }
      if (!!this.checkboxes.controls['location'].value && !!this.checkboxes.controls['students'].value == true) {
        data.campusLikes.push('Location');
      }
      if (!!this.checkboxes.controls['campus'].value && !!this.checkboxes.controls['students'].value == true) {
        data.campusLikes.push('Campus');
      }
      if (!!this.checkboxes.controls['atmosphere'].value && !!this.checkboxes.controls['students'].value == true) {
        data.campusLikes.push('Atmosphere');
      }
      if (!!this.checkboxes.controls['dorm'].value && !!this.checkboxes.controls['students'].value == true) {
        data.campusLikes.push('Dorm Rooms');
      }
      if (!!this.checkboxes.controls['sports'].value && !!this.checkboxes.controls['students'].value == true) {
        data.campusLikes.push('Sports');
      }
      console.log(data)
      this.service.apiCall(data);
      this.router.navigate(['/']);
    }
  }

  reset() {
    this.surveyForm.reset();
  }

}
