import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  
  
  {
    path: '',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  }
  // {
  //   path: '',
  //   redirectTo: 'menu',
  //   pathMatch: 'full'
  // }
  // {
  //   path: 'travel',
  //   loadChildren: () => import('./pages/travel/travel.module').then( m => m.TravelPageModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'group',
  //   loadChildren: () => import('./pages/group/group.module').then( m => m.GroupPageModule)
  // },
  // {
  //   path: 'gallary',
  //   loadChildren: () => import('./pages/gallary/gallary.module').then( m => m.GallaryPageModule)
  // },
  // {
  //   path: 'my-activity',
  //   loadChildren: () => import('./pages/my-activity/my-activity.module').then( m => m.MyActivityPageModule)
  // },
  // {
  //   path: 'cart',
  //   loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  // },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  // },
  // {
  //   path: 'login-regiter',
  //   loadChildren: () => import('./pages/login-regiter/login-regiter.module').then( m => m.LoginRegiterPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
