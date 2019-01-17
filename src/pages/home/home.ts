import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AdduserPage } from '../adduser/adduser';
import { AddcustomerPage } from '../addcustomer/addcustomer';
import { CustomerLoginPage } from '../customerlogin/customerlogin';
import { ViewcustomersPage } from '../viewcustomers/viewcustomers';
import{ AddinventoryPage } from '../addinventory/addinventory';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	  constructor(public navCtrl: NavController) {}
	  
	 getloginPage(){ 		
		 this.navCtrl.push(LoginPage);	 
	 }
	 
	 getadduserPage(){ 		
		 this.navCtrl.push(AdduserPage);	 
	 }
	 
	 getaddinventoryPage(){
		 this.navCtrl.push(AddinventoryPage);	
	 }
	 
	 getaddcustomerPage(){
		 this.navCtrl.push(AddcustomerPage);	
	 }
	 getcustomerloginPage(){
		 this.navCtrl.push(CustomerLoginPage);	
	 }
	 getcustomerlistPage(){
		  this.navCtrl.push(CustomerLoginPage);	
	 }
}
