import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AdduserPage } from '../pages/adduser/adduser';
import { AddcustomerPage } from '../pages/addcustomer/addcustomer';
import { CustomerLoginPage } from '../pages/customerlogin/customerlogin';
import { ViewcustomersPage } from '../pages/viewcustomers/viewcustomers';
import { AddinventoryPage } from '../pages/addinventory/addinventory';
import { User, Api, Register, Inventory, Customer, Custlogin, Customerlist } from '../providers';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
	LoginPage,
	AdduserPage,
	AddinventoryPage,
	ViewcustomersPage,
	AddcustomerPage,
	CustomerLoginPage
	
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
 
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	LoginPage,
	AdduserPage,
	AddinventoryPage,
	ViewcustomersPage,
	AddcustomerPage,
	CustomerLoginPage
	
  ],
  providers: [
	User,
	Api,
	Register,
	Inventory,
	Customerlist,
	Customer,
	Custlogin,
	StatusBar,
	SplashScreen,
	{ provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
