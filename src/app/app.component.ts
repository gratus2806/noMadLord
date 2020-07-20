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
  pages = [
    {
      title:'Home',
      url:'/tabs/home',
      icon: 'home'
    },
    {
      title:'Travel',
      url:'/tabs/travel',
      icon: 'airplane'
    },
    {
      title:'Groups',
      url:'/tabs/group',
      icon: 'people'
    },
    {
      title:'Gallery',
      url:'/tabs/gallary',
      icon: 'images'
    },
    {
      title:'My Activity',
      url:'/tabs/my-activity',
      icon: 'body'
    },
    {
      title:'Cart',
      url:'/tabs/cart',
      icon: 'cart'
    },
    {
      title:'About',
      url:'/tabs/about',
      icon: 'information'
    },
    {
      title:'Login/Register',
      url:'/tabs/login-regiter',
      icon: 'log-in'
    },
  
  ];
  selectedPath='';
  constructor(private router:Router,private platform: Platform,private splashScreen: SplashScreen,private statusBar: StatusBar) {
    // this.router.events.subscribe((event:RouterEvent)=>{
    //   this.selectedPath=event.url;
    // })
    // console.log("selected path>>>",this.router.url)
    router.events.subscribe((event: RouterEvent) => {
     
        this.selectedPath = event.url;
        // console.log(">>>>",this.selectedPath);
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
