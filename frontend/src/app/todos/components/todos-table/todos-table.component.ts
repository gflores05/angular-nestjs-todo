import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../types';

@Component({
  selector: 'app-todos-table',
  template: `
    <h2>Todos
      <a routerLink="/todos/new" mat-mini-fab color="primary" aria-label="Add new todo">
        <mat-icon>add</mat-icon>
      </a>
    </h2>
    <table mat-table [dataSource]="todos" class="mat-elevation-z8">
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef> Id </th>
        <td mat-cell *matCellDef="let element"> {{element.id}} </td>
      </ng-container>

      <ng-container matColumnDef="title">
        <th mat-header-cell *matHeaderCellDef> Title </th>
        <td mat-cell *matCellDef="let element"> {{element.title}} </td>
      </ng-container>

      <ng-container matColumnDef="userid">
        <th mat-header-cell *matHeaderCellDef> User Id </th>
        <td mat-cell *matCellDef="let element"> {{element.userid}} </td>
      </ng-container>

      <ng-container matColumnDef="completed">
        <th mat-header-cell *matHeaderCellDef> Completed </th>
        <td mat-cell *matCellDef="let element">
          <span [class]="element.completed ? 'green' : 'red'">
            {{element.completed ? 'Completed' : 'Pending'}}
          </span>
          </td>
      </ng-container>

      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef> Actions </th>
        <td mat-cell *matCellDef="let element">
        <a [routerLink]="'/todos/'+element.id" color="primary" mat-icon-button aria-label="Edit">
          <mat-icon>edit</mat-icon>
        </a>
        <button
          color="warn"
          mat-icon-button
          aria-label="Delete"
          (click)="delete.emit(element.id)"
          >
          <mat-icon>delete</mat-icon>
        </button>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `,
  styleUrls: ['./todos-table.component.scss']
})
export class TodosTableComponent implements OnInit {

  @Input() todos: Todo[];

  @Output() delete = new EventEmitter<number>();

  displayedColumns = ["id", "title", "userid", "completed", "actions"];

  constructor() { }

  ngOnInit(): void {
  }

}
