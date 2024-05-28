import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonasRoutingModule } from './personas-routing.module';
import { PersonasListComponent } from './personas-list/personas-list.component';
import { PersonasEditComponent } from './personas-edit/personas-edit.component';
import { PersonasCreateComponent } from './personas-create/personas-create.component';


@NgModule({
  declarations: [
    PersonasListComponent,
    PersonasEditComponent,
    PersonasCreateComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    FormsModule
  ]
})
export class PersonasModule { }
