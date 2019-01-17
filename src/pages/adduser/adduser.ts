import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Register } from '../../providers';

@Component({
 
  templateUrl: 'adduser.html'
})
export class AdduserPage {
	public first_name : any;
	public last_name : any;
	public username : any;
	public pass_word : any;
	public email : any;
	
	
	account: { first_name: string, last_name: string, username: string, pass_word: string, email: string, } = {
    first_name: this.first_name,
    last_name: this.last_name,
    username: this.username,
    pass_word: this.pass_word,
    email: this.email,
  
    };
	
   

  constructor(public navCtrl: NavController,
    public register: Register,
    public toastCtrl: ToastController){}
	
   
   
	

	adduser()	
	{ console.log(this.account);
		this.register.adduser(this.account).subscribe((resp) => {
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
