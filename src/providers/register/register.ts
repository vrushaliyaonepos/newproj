import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';


@Injectable()
export class Register {
_register: any;

  constructor(public api: Api) { }


  adduser(accountInfo: any) {
    let seq = this.api.get('adduser', accountInfo);
   
    return seq;
  }

  
}
