import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginRegiterPageRoutingModule } from './login-regiter-routing.module';

import { LoginRegiterPage } from './login-regiter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRegiterPageRoutingModule
  ],
  declarations: [LoginRegiterPage]
})
export class LoginRegiterPageModule {}
