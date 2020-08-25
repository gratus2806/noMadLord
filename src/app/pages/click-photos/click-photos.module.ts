import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClickPhotosPageRoutingModule } from './click-photos-routing.module';

import { ClickPhotosPage } from './click-photos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClickPhotosPageRoutingModule
  ],
  declarations: [ClickPhotosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClickPhotosPageModule {}
