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
  userData;
  private _success = new Subject<string>();
  private _failure = new Subject<string>();
  private _warning = new Subject<string>();
  staticAlertClosed = false;
  successMessage = '';
  failureMessage = '';
  warningMessage = '';
  local;
  constructor(private formBuilder: FormBuilder, private router: Router,public userService: UserService) { 
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
      UserName: this.loginForm.controls.email.value,
      Password: this.loginForm.controls.password.value,
      rememberMe:this.loginForm.controls.rememberMe.value,
    }
    if(this.userData.UserName=='' || this.userData.Password==''){
      this._warning.next( 'Something went wrong..!!!');
      console.log("in main if")
      alert("in main if");
    }else {
      alert("in main else"); 
      console.log("in main else")
      this.userService.loginDetails(this.userData).subscribe(data => {
        // console.log("userDetails>>",data['Data'].User)
        // console.log("Status>>",data['Status'])
        if(this.userData.email!='' || this.userData.password!=''){
          // this._warning.next(` Something went wrong..!!!`);
          if(data['Status']==1){
            alert("in 2main if");
            console.log("in 2main if")
            this._success.next('Logged in Successfully');
            localStorage.setItem('userData', JSON.stringify(data['Data'].User));
            localStorage.setItem('loginStatus', data['Status']);
            localStorage.setItem('rememberMe', this.userData['rememberMe']);
            this.router.navigateByUrl('/app/tab/home');
          }else{
            alert("in main 2main else");
            console.log("in 2main else")
            this._failure.next('Login Failed try again.!!!');
          }
        }
      })
    }
    
    this.loginForm.reset();
    // console.log("userdata>>>>",this.userData)
  }
  

}
