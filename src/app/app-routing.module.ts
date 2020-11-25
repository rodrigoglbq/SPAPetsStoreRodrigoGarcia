import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: 'edition', loadChildren: () => import('./edition/edition.module').then(m => m.EditionModule) },

  { path: 'details', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) },

  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },

  { path: '**', redirectTo: 'error', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
