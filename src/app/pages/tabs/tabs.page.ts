import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import{Router, RouterEvent} from '@angular/router'
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  loginStatus;
  selectedPath;
  hideMainTabs=false;
  showMainTabs=true;
  constructor(public menu: MenuController,private router:Router) {
    this.loginStatus = localStorage.getItem('loginStatus');
    router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
      if(this.selectedPath=='/app/tab/upload-photos' || this.selectedPath=='/app/tab/click-photos' || this.selectedPath=='/app/tab/my-activity' ){
        this.hideMainTabs=true;
        this.showMainTabs=false;
      } else{
        this.hideMainTabs=false;
        this.showMainTabs=true;
      }
      
  });
  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    console.log(" run this")
    this.menu.enable(true);
  }
}
