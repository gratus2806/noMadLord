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
      url:'/tabs/home'
    },
    {
      title:'Travel',
      url:'/tabs/travel'
    },
    {
      title:'Groups',
      url:'/tabs/group'
    },
    {
      title:'Gallary',
      url:'/tabs/gallary'
    },
    {
      title:'My Activity',
      url:'/tabs/my-activity'
    },
    {
      title:'Cart',
      url:'/tabs/cart'
    },
    {
      title:'About',
      url:'/tabs/about'
    },
    {
      title:'Login/Regiter',
      url:'/tabs/login-regiter'
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
        console.log(">>>>",this.selectedPath);
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
