import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Custlogin } from '../../providers';

@Component({
 
  templateUrl: 'customerlogin.html'
})
export class CustomerLoginPage {
	public user_name : any;
	public password : any;
	
	
	account: { user_name: string, password: string } = {
    user_name: this.user_name,
    password: this.password,
    
    };
	
   

  constructor(public navCtrl: NavController,
    public custlogin: Custlogin,
    public toastCtrl: ToastController){}
	
   
   
	

	login()	
	{ console.log(this.account);
		this.custlogin.login(this.account).subscribe((resp) => {
			console.log(resp);
			//alert('succes');
		  //this.navCtrl.push(MainPage);
		}, (err) => {
		  //this.navCtrl.push(MainPage);
		  // Unable to log in
		  let toast = this.toastCtrl.create({
			message: 'Error',
			duration: 3000,
			position: 'top'
		  });
		  toast.present();
		});		 
	}
	
}
