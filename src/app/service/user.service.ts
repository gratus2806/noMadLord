import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import {User} from "../model/user.model";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  
  loginDetails(userData){
    return this.http.post(environment.apiBaseUrl+'Account/UserLogin',userData);
  }

}
