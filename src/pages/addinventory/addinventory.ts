import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Inventory } from '../../providers';


	@Component({
	templateUrl: 'addinventory.html'
	})

	export class AddinventoryPage {
		public user_id : any;
		public station_id : any;
		public dep_id : any;
		public inventory_name : any;
		public inventory_no : any;
		public description : any;
		public cost : any;
		public price_charge : any;
		public tax : any;
		public price_tax : any;
		public stock : any;
		public vendor : any;
		public re_Qty : any;
		public sku : any;
		public note : any;		
		public reorderlevel : any;
		public modifieritem : any;
		public add_modifier_data : any;
	
		account: { user_id: string, station_id: string, dep_id: string, inventory_name: string, inventory_no: string, description: string, cost: string, price_charge: string, tax: string, price_tax: string, stock: string, vendor: string, re_Qty: string, sku: string, note: string, reorderlevel: string, modifieritem: string, add_modifier_data: string} = {
		user_id : this.user_id,
		station_id : this.station_id,
		dep_id : this.dep_id,
		inventory_name: this.inventory_name,
		inventory_no: this.inventory_no,
		description: this.description,
		cost: this.cost,
		price_charge: this.price_charge,
		tax: this.tax,
		price_tax: this.price_tax,
		stock: this.price_tax,
		vendor: this.vendor,
		re_Qty: this.re_Qty,
		sku: this.sku,
		note: this.note,	
		reorderlevel: this.reorderlevel,
		modifieritem: this.modifieritem,
		add_modifier_data: this.add_modifier_data
		
    };
	
	constructor(public navCtrl: NavController,
		public inventory: Inventory,
	//	public deptlist: DeptList,
		public toastCtrl: ToastController){}
		
		/* ionViewDidLoad() {
			this.deptlist.viewdeptlist().subscribe((resp) => {
			console.log(resp);
			// result = JSON.stringify(resp);
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
		} */

	addinventory(){	
		console.log(this.account);					
		this.inventory.addinventory(this.account).subscribe((resp) => {
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