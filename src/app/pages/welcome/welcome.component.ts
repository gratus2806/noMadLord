import { Component, OnInit } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

    login(){
        this.router.navigate(['login-regiter']);
    }
  
    dashboard(){
      this.router.navigate(['/app', 'tab', 'home']);
    }
}
