import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const HTTP_URL = 'app/customers.json';

@Injectable()
export class CustomerService {

  constructor(private _http: Http) { }

  getCustomers() {
    return this._http.get(HTTP_URL)
    .map((response: Response) => response.json());
  }
}
