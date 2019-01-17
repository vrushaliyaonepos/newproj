import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';


@Injectable()
export class User {
_user: any;

  constructor(public api: Api) { }


  login(accountInfo: any) {
    let seq = this.api.get('login', accountInfo);

   

    return seq;
  }

  
}
