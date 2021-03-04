import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TodosRoutingModule } from './todos-routing.module';
import { containers } from './containers';
import { components } from './components';
import { services } from './services';
import * as fromStore from './store';

@NgModule({
  declarations: [...containers, ...components],
  imports: [
    CommonModule,
    StoreModule.forFeature('todos', fromStore.todosReducer),
    EffectsModule.forFeature(fromStore.effects),
    ReactiveFormsModule,
    FormsModule,
    TodosRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [...services, ...fromStore.facades]
})
export class TodosModule { }
