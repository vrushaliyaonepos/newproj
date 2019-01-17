import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Customerlist } from '../../providers';

@Component({     
 
  templateUrl: 'viewcustomers.html'
})
export class ViewcustomersPage {
	
	
	account: { } = {
    
    };
	
   

  constructor(public navCtrl: NavController,
    public Customerlist: Customerlist,
    public toastCtrl: ToastController){} 
	
   
   


	viewcustomers()	
	{ console.log(this.account);
		this.Customerlist.showcustomer(this.account).subscribe((resp) => {
			console.log(resp);
		    //alert('success');
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
  