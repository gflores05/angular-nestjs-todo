import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { TodosFacade } from 'src/app/todos/store/todos.facade';
import { Todo } from '../../types';

@Component({
  selector: 'app-todo',
  template: `
    <app-todo-form
      [todo]="facade.todo$ | async"
      (save)="onSaveTodo($event)"
      ></app-todo-form>
  `,
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(public facade: TodosFacade, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const selectedId = params.get('id');

        if (selectedId) {
          selectedId === 'new' ? this.facade.loadTodo(0) :this.facade.loadTodo(selectedId);
        }
      }
    );
  }

  onSaveTodo(todo: Todo) {
    this.facade.saveTodo(todo);
  }

}
