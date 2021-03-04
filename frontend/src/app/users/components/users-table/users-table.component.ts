import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../types';

@Component({
  selector: 'app-users-table',
  template: `
    <h2>Users
      <a routerLink="/users/new" mat-mini-fab color="primary" aria-label="Add new user">
        <mat-icon>add</mat-icon>
      </a>
    </h2>
    <table mat-table [dataSource]="users" class="mat-elevation-z8">
      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef> Id </th>
        <td mat-cell *matCellDef="let element"> {{element.id}} </td>
      </ng-container>

      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Name </th>
        <td mat-cell *matCellDef="let element"> {{element.name}} </td>
      </ng-container>

      <ng-container matColumnDef="username">
        <th mat-header-cell *matHeaderCellDef> Username </th>
        <td mat-cell *matCellDef="let element"> {{element.username}} </td>
      </ng-container>

      <ng-container matColumnDef="phone">
        <th mat-header-cell *matHeaderCellDef> Phone </th>
        <td mat-cell *matCellDef="let element"> {{element.phone}} </td>
      </ng-container>

      <ng-container matColumnDef="website">
        <th mat-header-cell *matHeaderCellDef> Website </th>
        <td mat-cell *matCellDef="let element"> {{element.website}} </td>
      </ng-container>

      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef> Actions </th>
        <td mat-cell *matCellDef="let element">
        <a [routerLink]="'/users/'+element.id" color="primary" mat-icon-button aria-label="Edit">
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
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  @Input() users: User[];

  @Output() delete = new EventEmitter<number>();

  displayedColumns = ["id", "name", "username", "phone", "website", "actions"];

  constructor() { }

  ngOnInit(): void {
  }

}
