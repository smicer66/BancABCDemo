import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { LoginPage } from '../login/login';

/**
 * Generated class for the ManageAccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-accounts',
  templateUrl: 'manage-accounts.html',
})
export class ManageAccountsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageAccountsPage');
  }

  
	logout()
	{
		let loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		loading.present();
		this.storage.remove('zambia_bank_customer_token');
		this.storage.remove('zambia_bank_loggedInUser');
		loading.dismiss();
		this.navCtrl.setRoot(LoginPage);
		
	}

}
