import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditionComponent } from './edition.component';

const routes: Routes = [{ path: '', component: EditionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditionRoutingModule { }
