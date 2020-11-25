import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditionRoutingModule } from './edition-routing.module';
import { EditionComponent } from './edition.component';


@NgModule({
  declarations: [EditionComponent],
  imports: [
    CommonModule,
    EditionRoutingModule
  ]
})
export class EditionModule { }
