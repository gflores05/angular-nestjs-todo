import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent, UserComponent } from './containers';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: ':id',
      component: UserComponent
    },
    {
      path: 'new',
      component: UserComponent
    },
    {
      path: '',
      component: UsersComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
