import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersRoutingModule } from './users-routing.module';
import { containers } from './containers';
import { components } from './components';
import { services } from './services';
import * as fromStore from './store';

@NgModule({
  declarations: [...containers, ...components],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', fromStore.usersReducer),
    EffectsModule.forFeature(fromStore.effects),
    UsersRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [...services, ...fromStore.facades]
})
export class UsersModule { }
