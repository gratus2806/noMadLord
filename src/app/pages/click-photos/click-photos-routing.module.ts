import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClickPhotosPage } from './click-photos.page';

const routes: Routes = [
  {
    path: '',
    component: ClickPhotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClickPhotosPageRoutingModule {}
