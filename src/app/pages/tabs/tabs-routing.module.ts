import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  
  {
    path: 'tab',
    component: TabsPage,
    children:[
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
        path: 'click-photos',
        loadChildren: () => import('../click-photos/click-photos.module').then( m => m.ClickPhotosPageModule)
      },
      {
        path: 'upload-photos',
        loadChildren: () => import('../upload-photos/upload-photos.module').then( m => m.UploadPhotosPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo:'/app/tab/home',
    pathMatch:'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
