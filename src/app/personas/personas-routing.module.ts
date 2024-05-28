import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasListComponent } from './personas-list/personas-list.component'
import { PersonasEditComponent } from './personas-edit/personas-edit.component'
import { PersonasCreateComponent } from './personas-create/personas-create.component'

const routes: Routes = [
  {
    path: 'personas',
    component: PersonasListComponent
  },
  {
    path: 'personas/edit/:id',
    component: PersonasEditComponent
  },
  {
    path: 'personas/create',
    component: PersonasCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonasRoutingModule { }
