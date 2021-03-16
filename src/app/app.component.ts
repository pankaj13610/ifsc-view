import { Component } from '@angular/core';
import { IFSCResponse } from './ifsc-response';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  code = '';
  result: IFSCResponse = {
    CENTRE: 'NA',
    STATE: 'KARNATAKA',
    DISTRICT: 'MANGALORE',
    SWIFT: '',
    MICR: 'NA',
    BRANCH: 'Karnataka Bank IMPS',
    CONTACT: '2228222',
    NEFT: true,
    CITY: 'DAKSHINA KANNADA',
    RTGS: false,
    UPI: true,
    IMPS: true,
    ADDRESS:
      'REGD. & HEAD OFFICE, P.B.NO.599, MAHAVEER CIRCLE, KANKANADY, MANGALORE - 575002',
    BANK: 'Karnataka Bank',
    BANKCODE: 'KARB',
    IFSC: 'KARB0000001',
  };

  search() {
    console.log(`Seaching for ${this.code}`);
  }
}
