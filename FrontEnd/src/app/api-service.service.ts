import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  apiCall(data: any): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const requestOptions = { headers: headers };

    return this.http
      .post('http://localhost:8080/api/survey-form', data, requestOptions).subscribe(data => {
        console.log(data);
      });
  }

  getData(): any {
    return this.http
      .get('http://localhost:8080/api/survey-form');
  }
}
