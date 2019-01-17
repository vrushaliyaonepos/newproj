import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { User } from '../../providers';

@Component({
 
  templateUrl: 'login.html'
})
export class LoginPage {
	public user_name : any;
	public password : any;
	station_id = "1";
	
	account: { user_name: string, password: string , station_id: string} = {
    user_name: this.user_name,
    password: this.password,
    station_id: this.station_id
    };
	
   

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController){}
	
   
   
	

	login()	
	{ console.log(this.account);
		this.user.login(this.account).subscribe((resp) => {
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
