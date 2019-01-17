import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';


@Injectable()
export class DeptList {
_inventory: any;

  constructor(public api: Api) { }


  viewdeptlist(accountInfo: any) {
    //let seq = this.api.get('add_product', accountInfo);
    let seq = this.api.get('view_department');
   
    return seq;
  }

  
}
