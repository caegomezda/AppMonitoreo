import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mace',
    loadChildren: () => import('./mace/mace.module').then( m => m.MacePageModule)
  },
  {
    path: 'herv',
    loadChildren: () => import('./herv/herv.module').then( m => m.HervPageModule)
  },
  {
    path: 'clar',
    loadChildren: () => import('./clar/clar.module').then( m => m.ClarPageModule)
  },
  {
    path: 'ferm',
    loadChildren: () => import('./ferm/ferm.module').then( m => m.FermPageModule)
  },
  {
    path: 'cocc',
    loadChildren: () => import('./cocc/cocc.module').then( m => m.CoccPageModule)
  },
  {
    path: 'alm',
    loadChildren: () => import('./alm/alm.module').then( m => m.AlmPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
