import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})

export class CustomersComponent implements OnInit {
  customers = [
    { id: 1, name: 'vinay' },
    { id: 2, name: 'sucheta' },
    { id: 3, name: 'abhijit' },
    { id: 4, name: 'anurag' },
    { id: 5, name: 'laura' },
    { id: 6, name: 'liam' }
  ];
  constructor() { }

  ngOnInit() {

  }
}
