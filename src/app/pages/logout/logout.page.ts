import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router: Router,public userService: UserService,private route: ActivatedRoute) { 
   
    route.params.subscribe(val => {
      this.userService.logout();
    });
  
  
}

ngOnInit() {
  
}
ionViewDidLoad() {
  console.log("I'm alive!");
}
ionViewWillLeave() {
  console.log("Looks like I'm about to leave :(");
}


}
