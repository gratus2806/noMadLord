import { Component, OnInit } from '@angular/core';
import{Router, RouterEvent} from '@angular/router'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
// pages = [
//   {
//     title:'Home',
//     url:'/menu/home'
//   },
//   {
//     title:'Travel',
//     url:'/menu/travel'
//   },
//   {
//     title:'Groups',
//     url:'/menu/group'
//   },
//   {
//     title:'Gallary',
//     url:'/menu/gallary'
//   },
//   {
//     title:'My Activity',
//     url:'/menu/my-activity'
//   },
//   {
//     title:'Cart',
//     url:'/menu/cart'
//   },
//   {
//     title:'About',
//     url:'/menu/about'
//   },
//   {
//     title:'Login/Regiter',
//     url:'/menu/login-regiter'
//   },

// ];


// selectedPath='';
  constructor(private router:Router) { 
    
    // this.router.events.subscribe((event:RouterEvent)=>{
    //   this.selectedPath=event.url;
    // })
  
  }
    

  ngOnInit() {
   
    // console.log(">>>>loaded",this.selectedPath)
  }

}
