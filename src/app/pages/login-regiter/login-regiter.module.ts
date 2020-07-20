import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginRegiterPageRoutingModule } from './login-regiter-routing.module';

import { LoginRegiterPage } from './login-regiter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    IonicModule,
    LoginRegiterPageRoutingModule
  ],
  declarations: [LoginRegiterPage]
})
export class LoginRegiterPageModule {}
