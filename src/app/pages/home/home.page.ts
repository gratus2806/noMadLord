import { Component, OnInit, ViewChild } from '@angular/core';
import {  IonSlides } from '@ionic/angular';

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

  constructor() { 
    this.loginStatus=localStorage.getItem('loginStatus');
  }

  ngOnInit() {
  }

}
