import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
// import {User} from "../model/user.model";

@Injectable()
export class UserService {
  constructor(private http: HttpClient,private router: Router) { }
  
  loginDetails(userData){
    return this.http.post(environment.apiBaseUrl+'Account/UserLogin',userData);
  }
  registrationDetails(userRegisterData){
    return this.http.post(environment.apiBaseUrl+'Account/Register',userRegisterData);
  }
  logout(){
    localStorage.removeItem("loginStatus");
    localStorage.removeItem("userData");
    localStorage.removeItem("rememberMe");
    this.router.navigate(['/welcome']);
  }
  forgotPassword(forgotPasswordData){
    return this.http.post(environment.apiBaseUrl+'Account/ForgetPassword',forgotPasswordData);
  }
  loadDashboardItems(){
    return this.http.get(environment.apiBaseUrl+'Dashboard/GetAllDetails');
  }

}
