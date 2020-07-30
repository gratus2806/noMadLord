import { Component, OnInit, ViewChild } from '@angular/core';
import {  IonSlides, MenuController } from '@ionic/angular';
import {Router} from "@angular/router";
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
sliderOptions = {
    direction: 'vertical'
  }
  loginStatus;
  PublicPkgViewModel=[];
  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(public menu: MenuController,private router: Router,public userService: UserService) { 
    this.loginStatus=localStorage.getItem('loginStatus');
    
  }
 
  ngOnInit() {
    this.userService.loadDashboardItems().subscribe(data => {
      console.log("data>>>>",data['Data'].PublicPkgViewModel)
      this.PublicPkgViewModel=data['Data'].PublicPkgViewModel
    })
  }
 

}
