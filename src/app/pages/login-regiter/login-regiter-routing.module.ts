import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRegiterPage } from './login-regiter.page';

const routes: Routes = [
  {
    path: '',
    component: LoginRegiterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRegiterPageRoutingModule {}
