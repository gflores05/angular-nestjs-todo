import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosComponent, TodoComponent } from './containers';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: ':id',
      component: TodoComponent
    },
    {
      path: 'new',
      component: TodoComponent
    },
    {
      path: '',
      component: TodosComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
