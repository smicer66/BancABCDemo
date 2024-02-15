import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterStepFourPage } from '../register-step-four/register-step-four';
import { RegisterStepThreePage } from '../register-step-three/register-step-three';

/**
 * Generated class for the GroundZeroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  templateUrl: 'ground-zero.html',
})
export class GroundZeroPage {
	oneBankRoot: RegisterStepThreePage;
	eKwachaRoot: RegisterStepFourPage;
	
	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad GroundZeroPage');
	}

}
