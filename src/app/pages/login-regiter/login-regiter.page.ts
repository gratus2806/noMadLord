import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';


@Component({
  selector: 'app-login-regiter',
  templateUrl: './login-regiter.page.html',
  styleUrls: ['./login-regiter.page.scss'],
})
export class LoginRegiterPage implements OnInit {
  loginForm: FormGroup;
  userData;
  private _success = new Subject<string>();
  private _failure = new Subject<string>();
  private _warning = new Subject<string>();
  staticAlertClosed = false;
  successMessage = '';
  failureMessage = '';
  warningMessage = '';
  local;
  constructor(private formBuilder: FormBuilder, private router: Router) { 
    // console.log("userdata_local>>>>>>>>",localStorage.getItem('userData'));
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['',Validators.required],
      password: ['',Validators.required],
      rememberMe:['']
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
    // this.submitted = true;
    this.userData = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
      rememberMe:this.loginForm.controls.rememberMe.value,
    }
    if(this.userData.email=='' || this.userData.password==''){
      this._warning.next(` Something went wrong..!!!`);
    }
    else if(this.userData.email=='admin' && this.userData.password=='123'){
      localStorage.setItem('userData', JSON.stringify(this.userData));
      this._success.next(` Logged in Successfully`);
    } else{
      this._failure.next(` Login Failed try again.!!!`);
    }
    
    console.log("userdata>>>>",this.userData)
  }
  

}
