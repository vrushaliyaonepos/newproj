import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';


@Injectable()
export class Inventory {
_inventory: any;

  constructor(public api: Api) { }


  addinventory(accountInfo: any) {
    let seq = this.api.get('add_product', accountInfo);
   
   
    return seq;
  }

  
}
