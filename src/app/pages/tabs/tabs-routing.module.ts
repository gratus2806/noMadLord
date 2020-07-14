import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {
        path: 'tab1',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
        // loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
      },
      {
        path: 'travel',
        loadChildren: () => import('../travel/travel.module').then( m => m.TravelPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'group',
        loadChildren: () => import('../group/group.module').then( m => m.GroupPageModule)
      },
      {
        path: 'gallary',
        loadChildren: () => import('../gallary/gallary.module').then( m => m.GallaryPageModule)
      },
      {
        path: 'my-activity',
        loadChildren: () => import('../my-activity/my-activity.module').then( m => m.MyActivityPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
      {
        path: 'login-regiter',
        loadChildren: () => import('../login-regiter/login-regiter.module').then( m => m.LoginRegiterPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo:'/tabs/tab1',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
