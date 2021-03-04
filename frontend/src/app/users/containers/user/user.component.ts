import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { UsersFacade } from 'src/app/users/store/users.facade';
import { User } from '../../types';

@Component({
  selector: 'app-user',
  template: `
    <app-user-form
      [user]="facade.user$ | async"
      (save)="onSaveUser($event)"
      ></app-user-form>
  `,
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public facade: UsersFacade, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const selectedId = params.get('id');

        if (selectedId) {
          selectedId === 'new' ? this.facade.loadUser(0) :this.facade.loadUser(selectedId);
        }
      }
    );
  }

  onSaveUser(user: User) {
    this.facade.saveUser(user);
  }

}
