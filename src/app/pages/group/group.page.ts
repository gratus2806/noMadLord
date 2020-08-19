import { Component, OnInit, ViewChild } from '@angular/core';
import {  IonSlides, MenuController } from '@ionic/angular';
import { UserService } from '../../service/user.service';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {
  sliderOptions = {
    direction: 'vertical'
  }
  loginStatus;
  PublicPkgViewModel=[];
  PublicGrpModel=[];
  lstBlogs=[];
  lstImgBlgModel=[];
  loadingForm= true;

  private _failure = new Subject<string>();
  staticAlertClosed = false;
  failureMessage = '';
  local;
  ourGroupsClicked=false;
  @ViewChild('slides', { static: true }) slides: IonSlides;
  constructor(public menu: MenuController,public userService: UserService) { 
    this.loginStatus=localStorage.getItem('loginStatus');
  }

  ngOnInit() {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._failure.subscribe(message => this.failureMessage = message);
    this._failure.pipe(
      debounceTime(5000)
    ).subscribe(() => this.failureMessage = '');

    this.userService.loadDashboardItems().subscribe(data => {
      console.log("data>>>>",data)
      this.PublicPkgViewModel=data['Data'].PublicPkgViewModel
      this.PublicGrpModel = data['Data'].PublicGrpModel
      this.lstBlogs=data['Data'].lstBlogs
      this.lstImgBlgModel=data['Data'].lstImgBlgModel
      if(data['Status']==1){
        this.loadingForm=false;
      } else{
        this._failure.next('No Internet Connection.!!!');
        this.loadingForm=false;
      }
    })
  }
  PublicGrpModelClicked(){
    this.ourGroupsClicked=true;
    console.log("PublicGrpModelClicked")
  }
  closeButton(){
    this.ourGroupsClicked=false;
  }

}
