import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController, Platform, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import 'rxjs/add/operator/take';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/*import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';*/

import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
//import { LoadingProvider } from '../../providers/loading/loading';
import { NewCountryMobilePage } from '../new-country-mobile/new-country-mobile';

/**
 * Generated class for the RegisterStepFourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-step-four',
  templateUrl: 'register-step-four.html',
})
export class RegisterStepFourPage {

	registerStepFourData = { otp1: '', otp2: '', otp3: '', otp4: '' };
	//authentication_code_val: any = '';
	RegisterStepFourPageForm : FormGroup;
	otp1: AbstractControl;
	otp2: AbstractControl;
	otp3: AbstractControl;
	otp4: AbstractControl;
	loading: any;
	modalDismissData: any;

	
	//, public camera: Camera, public file: File, public filePath: FilePath,public loadingProvider: LoadingProvider
	constructor(public modalCtrl: ModalController, public platform: Platform, public loadingCtrl: LoadingController, public http: HttpClient, public storage: Storage, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public afAuth: AngularFireAuth, public fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
		this.RegisterStepFourPageForm = this.fb.group({
			'otp1' : [null, Validators.compose([Validators.required])],
			'otp2': [null, Validators.compose([Validators.required])],
			'otp3': [null, Validators.compose([Validators.required])],
			'otp4': [null, Validators.compose([Validators.required])]
		});
		/**/
		//this.authentication_code_val = navParams.get('authentication_code_');
		this.otp1 = this.RegisterStepFourPageForm.controls['otp1'];
        this.otp2 = this.RegisterStepFourPageForm.controls['otp2'];
		this.otp3 = this.RegisterStepFourPageForm.controls['otp3'];
        this.otp4 = this.RegisterStepFourPageForm.controls['otp4'];
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RegisterStepFourPage');
	}
  
	doRegisterStepFour(registerStepFourData){
		console.log(registerStepFourData);
		this.navCtrl.setRoot(RegisterStepFourPage);
		/*var parameter = JSON.stringify({account_number:this.account_number_val, authentication_code:this.authentication_code_val, username: registerStepFourData.username, password: registerStepFourData.password, confirm_password: registerStepFourData.confirm_password });
		console.log(parameter);
		let header = new HttpHeaders();
		header = header.set('Content-Type', 'application/json; charset=utf-8');
		header = header.set('Accept', 'application/json');
		
		const httpOptions = {headers: header};
		this.loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		this.loading.present();
		this.http.post<AccountVerify>("http://bankmobileapp.syncstatenigeria.com/api/v1/auth/register-step-three", parameter, httpOptions).subscribe(
			res => {
				this.loading.dismiss();
				let status: any = null;
				status = res.status;
				console.log(res);
				console.log(status);
				if(status==1)
				{
					let accounts = [];
					accounts.push(res.account_number);
					this.storage.set('zambia_bank_customer_accounts', JSON.stringify(accounts));
					
					let alert = this.alertCtrl.create({
						title: 'Account Verification',
						subTitle: res.response_msg,
						buttons: [{
							text: 'Ok',
							role: 'ok',
							handler: () => {
								console.log('Valid 1');
								this.navCtrl.setRoot(LoginPage, {account_number_: this.account_number_val});
							}
						}]
					});
					alert.present();
					
				}
				else
				{
					console.log(-1);
					let alert = this.alertCtrl.create({
						title: 'Account Verification',
						subTitle: res.response_msg,
						buttons: ['Dismiss']
					});
					alert.present();
				}
			},
			err => {
				this.loading.dismiss();
				console.log('Error occured');
			}
		);*/
	}
	
	
	openMobileNumberModal()
	{
		console.log(222);
		const profileModal = this.modalCtrl.create(NewCountryMobilePage, {  });
		profileModal.onDidDismiss(data => {
			console.log(data);
			this.modalDismissData = JSON.stringify(data);
		});
		profileModal.present();
	}

}



interface AccountVerify{
	status: string;
	response_msg: string;
	account_number: string;
	reg_code: string;
}