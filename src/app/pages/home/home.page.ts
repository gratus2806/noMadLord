import { Component, OnInit, ViewChild } from '@angular/core';
import {  IonSlides, MenuController } from '@ionic/angular';

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
  @ViewChild('slides', { static: true }) slides: IonSlides;

  constructor(public menu: MenuController,) { 
    this.loginStatus=localStorage.getItem('loginStatus');
  }
 
  ngOnInit() {
  }
 

}
