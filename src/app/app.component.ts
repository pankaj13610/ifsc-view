import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IFSCResponse } from './ifsc-response';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  code = '';
  result: IFSCResponse = null;
  errorMessage: string = null;

  search() {
    this.http.get<IFSCResponse>(`https://ifsc.razorpay.com/${this.code}`).subscribe({
      next: data => {
        this.result = data;
        this.errorMessage = null
      },
      error: error => {
        this.result = null
        this.errorMessage = `${error.status} ${error.statusText}`;
      }
    });
    console.log(`Seaching for ${this.code}`);
  }
}
