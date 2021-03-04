import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../types';

@Component({
  selector: 'app-users-table',
  template: `
    <h2>Users</h2>
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

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `,
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  @Input() users: User[];

  displayedColumns = ["id", "name", "username", "phone", "website"];

  constructor() { }

  ngOnInit(): void {
  }

}
