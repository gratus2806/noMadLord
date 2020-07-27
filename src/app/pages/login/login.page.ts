import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-login-regiter',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  forgotPasswordForm:FormGroup;
  userData;
  forgotPasswordData;

  private _success = new Subject<string>();
  private _failure = new Subject<string>();
  private _warning = new Subject<string>();
  staticAlertClosed = false;
  successMessage = '';
  failureMessage = '';
  warningMessage = '';
  local;
  loginFormDiv=true;
  forgotFormDiv=false;
  loadingForm=false;
  constructor(private formBuilder: FormBuilder, private router: Router,public userService: UserService) { 
    // console.log("userdata_local>>>>>>>>",localStorage.getItem('userData'));
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password: ['',Validators.required],
      rememberMe:['']
    });
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['',Validators.required],
    });

    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = '');

    this._failure.subscribe(message => this.failureMessage = message);
    this._failure.pipe(
      debounceTime(5000)
    ).subscribe(() => this.failureMessage = '');

    this._warning.subscribe(message => this.warningMessage = message);
    this._warning.pipe(
      debounceTime(5000)
    ).subscribe(() => this.warningMessage = '');
    
  }


  onSubmitLoginForm(){
    this.userData = {
      UserName: this.loginForm.controls.username.value,
      Password: this.loginForm.controls.password.value,
      rememberMe:this.loginForm.controls.rememberMe.value,
    }
    if(this.userData.UserName=='' || this.userData.Password==''){
      this._warning.next( 'Something went wrong..!!!');
      console.log("in main if")
      // alert("in main if");
    }else {
      // alert("in main else"); 
      console.log("in main else")
      this.loadingForm= true;
      this.userService.loginDetails(this.userData).subscribe(data => {
        if(data['Status']==1){
          // alert("in 2 main if");
          console.log("in 2main if")
          this._success.next('Logged in Successfully');
          localStorage.setItem('userData', JSON.stringify(data['Data'].User));
          localStorage.setItem('loginStatus', data['Status']);
          localStorage.setItem('rememberMe', this.userData['rememberMe']);
          this.router.navigateByUrl('/app/tab/home');
        }else{
          // alert("in main 2main else");
          console.log("in 2main else")
          this.loadingForm= false;
          this._failure.next('Login Failed try again.!!!');
        }
      })
    }
    this.loginForm.reset();
    // console.log("userdata>>>>",this.userData)
  }
  onSubmitForgotPasswordForm(){
    this.forgotPasswordData={
      Email: this.forgotPasswordForm.controls.email.value
    }
    if( this.forgotPasswordData.Email=="" ){
      this._warning.next( 'Something went wrong..!!!');
      console.log("forgotPasswordData",this.forgotPasswordData.Email)
      // alert("in main if");
    }else {
      this.userService.forgotPassword(this.forgotPasswordData).subscribe(data => {
      if(data['Status']==1){
        this._success.next('Please check mail to reset password');
      }else{
        this._failure.next('You are not registered with this email.');
      }
    })

    }
    console.log("forgotPasswordData",this.forgotPasswordData)
    this.forgotPasswordForm.reset();
  }
  backToLogin() {
    console.log("selected>>>")
    this. forgotFormDiv= false;
    this. loginFormDiv= true;
  }
  showForgotPasswordDiv() {
    this. forgotFormDiv= true;
    this. loginFormDiv= false;
  }
  

}
