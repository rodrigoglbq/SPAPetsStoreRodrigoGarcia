import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditionRoutingModule } from './edition-routing.module';
import { EditionComponent } from './edition.component';
import { FormsModule } from '@angular/forms';
import { PetFactoryModule } from 'pet-factory';

@NgModule({
  declarations: [EditionComponent],
  imports: [
    CommonModule,
    EditionRoutingModule,
    FormsModule,
    PetFactoryModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditionModule { }
