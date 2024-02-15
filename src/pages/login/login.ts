import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import 'rxjs/add/operator/take';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { ForgetPage } from '../forget/forget';
import { DashboardPage } from '../dashboard/dashboard';
import { GroundZeroPage } from '../ground-zero/ground-zero';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

//import { LoadingProvider } from '../../providers/loading/loading';

//import { Facebook } from '@ionic-native/facebook'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers : []
})
export class LoginPage {

	userData:any;
	loginData = { username:'', password:'' };
	authForm : FormGroup;
	username: AbstractControl;
	password: AbstractControl;
	passwordtype:string='password';
	passeye:string ='eye';
	loading: any;
	
	//,public loadingProvider: LoadingProvider
	constructor(public toastCtrl: ToastController, public loadingCtrl: LoadingController, public http: HttpClient, public alertCtrl: AlertController, public storage: Storage, public fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth) {
		this.authForm = this.fb.group({
			'username' : [null, Validators.compose([Validators.required])],
			'password': [null, Validators.compose([Validators.required])],
		});

        this.username = this.authForm.controls['username'];
        this.password = this.authForm.controls['password'];
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

/*------------------
--------------------*/

// For User Login

	userLogin(loginData){
		/*this.loadingProvider.startLoading();
		console.log('loginData',loginData);
  		this.afAuth.auth.signInWithusernameAndPassword(loginData.username, loginData.password)
			.then(result => {
			  console.log('result >>',result);
			  this.loadingProvider.stopLoading();
			  this.moveToHome(result);
			}).catch(err => {
			  this.loadingProvider.stopLoading();
			  console.log('err',err);
			  this.presentToast(err);
        });*/
	}
  
	login(loginData) {
		//return this.afAuth.auth.signInWithusernameAndPassword(username, password);
		//var parameter = JSON.stringify({mobileNumber:mobileNumber, password:password});
		//, {headers: {'Content-Type': 'application/json'} }
		this.navCtrl.setRoot(GroundZeroPage);
		/*let header = new HttpHeaders();
		header = header.set('Content-Type', 'application/json; charset=utf-8');
		header = header.set('Accept', 'application/json');
		
		const httpOptions = {headers: header};
		let username=loginData.username;
		let password=loginData.password;
		var parameter = JSON.stringify({username:username, password:password, roleCode:'CUSTOMER'});
		this.loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		this.loading.present();
		this.http.post<LoginRespInt>("http://bankmobileapp.syncstatenigeria.com/api/v1/auth/login", parameter, httpOptions).subscribe(
			res => {
				this.loading.dismiss();
				let status: any = null;
				status = res.status;
				console.log(res);
				console.log(status);
				if(res.status==1)
				{
					if(res.token)
					{
						this.storage.set('zambia_bank_customer_token', res.token);
						this.storage.set('zambia_bank_loggedInUser', (res.user));
						this.navCtrl.setRoot(DashboardPage);
					}
					else
					{
						let alert = this.alertCtrl.create({
							title: 'Login Response',
							message: "Logging In Failed. Ensure you provide your valid passenger login details",
							buttons: ['OK']
						});
						alert.present();
					}
				}
				else
				{
					let alert = this.alertCtrl.create({
						title: 'Login Response',
						message: "Logging In Failed. Ensure you provide your valid passenger login details",
						buttons: ['OK']
					});
					alert.present();
				}
			},
			err => {
				this.loading.dismiss();
				console.log('Error occured');
			}
		);
		*/
	}


// For Social Login

  socialLogin(isLogin){
  	if (isLogin == "facebook"){
      /*this.loadingProvider.startLoading();

      let provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(() => {
          this.loadingProvider.startLoading();
            firebase.auth().getRedirectResult().then((result)=>{
              console.log('result',result);
              this.moveToHome(result.user);
              this.loadingProvider.stopLoading();
            }).catch(function(error){
              this.loadingProvider.stopLoading();
              alert(error.message);
              console.log('error',error);
            })
            this.loadingProvider.stopLoading();
        }).catch(function(error){
          this.loadingProvider.stopLoading();
          alert(error.message);
          console.log('error',error);
        })
        this.loadingProvider.stopLoading();*/
  	}else if(isLogin == "google"){
      //this.loadingProvider.startLoading();
      let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(() => {
          //this.loadingProvider.startLoading();
            firebase.auth().getRedirectResult().then((result)=>{
              console.log('result',result);
              //this.loadingProvider.stopLoading();
              this.moveToHome(result.user);
            }).catch(function(error){
              //this.loadingProvider.stopLoading();
              alert(error.message);
              console.log('error',error);
            })
            //this.loadingProvider.stopLoading();
        }).catch(function(error){
          //this.loadingProvider.stopLoading();
          alert(error.message);
          console.log('error',error);
        })
        //this.loadingProvider.stopLoading();
  	}else if(isLogin == "twitter"){
  		// this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
      // 	.then(res => {
      // 		 this.moveToHome(res);
      // 	})
      // 	.catch(err => console.log('err',err));
  	}else if(isLogin == "github"){
  		// this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
      // 	.then(res => {
      // 		 this.moveToHome(res);
      // 	})
      // 	.catch(err => console.log('err',err));
  	}

  }

  // Move to register page
  moveToRegister(){
  	this.navCtrl.setRoot(RegisterPage);
  }

  //Move to Home Page
  moveToHome(res){
  	console.log('res',res);
  	this.navCtrl.setRoot(HomePage,{res:res});
  }

  presentToast(err) {
  const toast = this.toastCtrl.create({
    message: err.message,
    duration: 3000,
    position: 'bottom'
  });

  toast.present();
}
presentAlert(err) {

}

managePassword() {
  if(this.passwordtype == 'password'){
    this.passwordtype='text';
    this.passeye='eye-off';
  }else{
    this.passwordtype='password';
    this.passeye = 'eye';
  }
}
forgetpassword(){
  this.navCtrl.setRoot(ForgetPage);
}

}


interface LoginRespInt {
	status: any;
	response_msg: string;
	account_number: string;
	reg_code: string;
	token: string;
	user: any;
}