import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  
  
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  // },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login-regiter',
    loadChildren: () => import('./pages/login-regiter/login-regiter.module').then( m => m.LoginRegiterPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },

  // {
  //   path: 'login-regiter',
  //   loadChildren: () => import('../login-regiter/login-regiter.module').then( m => m.LoginRegiterPageModule)
  // }
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
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
