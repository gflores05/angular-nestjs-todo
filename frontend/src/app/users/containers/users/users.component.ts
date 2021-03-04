import { Component, OnInit } from '@angular/core';

import { UsersFacade } from 'src/app/users/store/users.facade';

@Component({
  selector: 'app-users',
  template: `
    <app-users-table [users]="facade.users$ | async"></app-users-table>
  `,
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(public facade: UsersFacade) { }

  ngOnInit(): void {
    this.facade.loadUsers();
  }

}
