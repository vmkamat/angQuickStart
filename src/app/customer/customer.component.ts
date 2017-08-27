import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
  @Input() customer: { id: number, name: string };

  myColor = 'blue';

  constructor() { }

  ngOnInit() {

  }

}

