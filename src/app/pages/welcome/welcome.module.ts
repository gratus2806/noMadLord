import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule, MenuController } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    IonicModule,
    WelcomePageRoutingModule
  ],
  declarations: [WelcomeComponent]
})
export class WelcomePageModule {
  constructor(
    public menu: MenuController,
  ) {
    // console.log(" run this")
    this.menu.enable(false);
  }

  ionViewWillEnter() {
    // console.log(" run this")
    this.menu.enable(false);
  }

}


