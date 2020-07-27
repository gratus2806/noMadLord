import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageRoutingModule } from './login.routing.module';

import { LoginPage } from './login.page';
import {HttpClientModule} from "@angular/common/http";
@NgModule({ 
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})
export class LoginRegiterPageModule {}
