import { Component } from '@angular/core';
import{Router, RouterEvent} from '@angular/router'
import { Platform } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  pagesAfterLogin = [
    {
      title:'Home',
      url:'/app/tab/home',
      icon: 'home'
    },
    {
      title:'Travel',
      url:'/app/tab/travel',
      icon: 'airplane'
    },
    {
      title:'Groups',
      url:'/app/tab/group',
      icon: 'people'
    },
    {
      title:'Gallery',
      url:'/app/tab/gallary',
      icon: 'images'
    },
    {
      title:'My Activity',
      url:'/app/tab/my-activity',
      icon: 'body'
    },
    {
      title:'Cart',
      url:'/app/tab/cart',
      icon: 'cart'
    },
    {
      title:'About',
      url:'/app/tab/about',
      icon: 'information'
    },
    {
      title:'Logout',
      url:'logout',
      icon: 'log-out'
    },
  ];
  pagesBeforeLogin = [
    {
      title:'Home',
      url:'/app/tab/home',
      icon: 'home'
    },
    {
      title:'Travel',
      url:'/app/tab/travel',
      icon: 'airplane'
    },
    {
      title:'Groups',
      url:'/app/tab/group',
      icon: 'people'
    },
    {
      title:'Gallery',
      url:'/app/tab/gallary',
      icon: 'images'
    },
    {
      title:'My Activity',
      url:'/app/tab/my-activity',
      icon: 'body'
    },
    {
      title:'Cart',
      url:'/app/tab/cart',
      icon: 'cart'
    },
    {
      title:'About',
      url:'/app/tab/about',
      icon: 'information'
    },
    {
      title:'Login/Register',
      url:'login-regiter',
      icon: 'log-in'
    }
  ];
  selectedPath='';
  loginStatus;
  constructor(private router:Router,private platform: Platform,private splashScreen: SplashScreen,private statusBar: StatusBar) {
    this.loginStatus=localStorage.getItem('loginStatus');
    console.log(">>>>",this.loginStatus)
    router.events.subscribe((event: RouterEvent) => {
     
        this.selectedPath = event.url;
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
