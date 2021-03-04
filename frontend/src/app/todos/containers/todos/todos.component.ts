import { Component, OnInit } from '@angular/core';

import { TodosFacade } from 'src/app/todos/store/todos.facade';

@Component({
  selector: 'app-todos',
  template: `
    <app-todos-table
      [todos]="facade.todos$ | async"
      (delete)="onDeleteTodo($event)"
    ></app-todos-table>
  `,
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(public facade: TodosFacade) { }

  ngOnInit(): void {
    this.facade.loadTodos();
  }

  onDeleteTodo(id) {
    this.facade.deleteTodo(id);
  }

}
