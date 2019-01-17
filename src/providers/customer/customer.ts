import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';


@Injectable()
export class Customer {
_customer: any;

  constructor(public api: Api) { }


  addcustomer(accountInfo: any) {
    let seq = this.api.get('add_product', accountInfo);
   
   
    return seq;
  }

  
}
