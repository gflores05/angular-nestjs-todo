import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../types';

@Component({
  selector: 'app-user-form',
  template: `
    <h2>User
      <a routerLink="/users" mat-mini-fab color="primary" aria-label="Add new user">
        <mat-icon>arrow_back</mat-icon>
      </a>
    </h2>
    <form [formGroup]="form" (ngSubmit)="onSave()">
      <mat-form-field class="full-width">
        <mat-label>Name</mat-label>
        <input
          required
          matInput
          formControlName="name"
          [placeholder]="'Name'"
        />
        <mat-error *ngIf="form.get('name').invalid"
          >Name is <strong>Required</strong></mat-error
        >
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>Username</mat-label>
        <input
          required
          matInput
          formControlName="username"
          [placeholder]="'Username'"
        />
        <mat-error *ngIf="form.get('username').invalid"
          >Username is <strong>Required</strong></mat-error
        >
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>Email</mat-label>
        <input
          required
          matInput
          formControlName="email"
          [placeholder]="'Email'"
        />
        <mat-error *ngIf="form.get('email').invalid"
          >Email is <strong>Required</strong></mat-error
        >
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>street</mat-label>
        <input
          required
          matInput
          formControlName="street"
          [placeholder]="'street'"
        />
        <mat-error *ngIf="form.get('street').invalid"
          >street is <strong>Required</strong></mat-error
        >
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>suite</mat-label>
        <input
          required
          matInput
          formControlName="suite"
          [placeholder]="'suite'"
        />
        <mat-error *ngIf="form.get('suite').invalid"
          >suite is <strong>Required</strong></mat-error
        >
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>city</mat-label>
        <input
          required
          matInput
          formControlName="city"
          [placeholder]="'city'"
        />
        <mat-error *ngIf="form.get('city').invalid"
          >city is <strong>Required</strong></mat-error
        >
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>zipcode</mat-label>
        <input
          required
          matInput
          formControlName="zipcode"
          [placeholder]="'zipcode'"
        />
        <mat-error *ngIf="form.get('zipcode').invalid"
          >zipcode is <strong>Required</strong></mat-error
        >
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>lat</mat-label>
        <input
          required
          matInput
          type="number"
          formControlName="lat"
          [placeholder]="'lat'"
        />
        <mat-error *ngIf="form.get('lat').invalid"
          >lat is <strong>Required</strong></mat-error
        >
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>lng</mat-label>
        <input
          required
          matInput
          type="number"
          formControlName="lng"
          [placeholder]="'lng'"
        />
        <mat-error *ngIf="form.get('lng').invalid"
          >lng is <strong>Required</strong></mat-error
        >
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>phone</mat-label>
        <input
          required
          matInput
          formControlName="phone"
          [placeholder]="'phone'"
        />
        <mat-error *ngIf="form.get('phone').invalid"
          >phone is <strong>Required</strong></mat-error
        >
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>website</mat-label>
        <input
          required
          matInput
          formControlName="website"
          [placeholder]="'website'"
        />
        <mat-error *ngIf="form.get('website').invalid"
          >website is <strong>Required</strong></mat-error
        >
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>Company Name</mat-label>
        <input
          required
          matInput
          formControlName="companyName"
          [placeholder]="'Company Nam'"
        />
        <mat-error *ngIf="form.get('companyName').invalid"
          >Company Nam is <strong>Required</strong></mat-error
        >
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>Catch Phrase</mat-label>
        <input
          required
          matInput
          formControlName="catchPhrase"
          [placeholder]="'Catch Phrase'"
        />
        <mat-error *ngIf="form.get('catchPhrase').invalid"
          >Catch Phrase is <strong>Required</strong></mat-error
        >
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>bs</mat-label>
        <input
          required
          matInput
          formControlName="bs"
          [placeholder]="'bs'"
        />
        <mat-error *ngIf="form.get('bs').invalid"
          >bs is <strong>Required</strong></mat-error
        >
      </mat-form-field>
      <button
        type="submit"
        mat-raised-button
        color="primary"
        [disabled]="!form.valid"
      >
        SAVE
      </button>
    </form>
  `,
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() user: User;

  @Output() save = new EventEmitter<User>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      street: ['', Validators.required],
      suite: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
      lat: [0, Validators.required],
      lng: [0, Validators.required],
      phone: ['', Validators.required],
      website: ['', Validators.required],
      companyName: ['', Validators.required],
      catchPhrase: ['', Validators.required],
      bs: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSave() {
    const user: User = {
      id: this.user?.id,
      name: this.form.get('name').value,
      username: this.form.get('username').value,
      email: this.form.get('email').value,
      address: {
        street: this.form.get('street').value,
        suite: this.form.get('suite').value,
        city: this.form.get('city').value,
        zipcode: this.form.get('zipcode').value,
        geo: {
          lat: this.form.get('lat').value,
          lng: this.form.get('lng').value
        }
      },
      phone: this.form.get('phone').value,
      website: this.form.get('website').value,
      company: {
        name: this.form.get('companyName').value,
        catchPhrase: this.form.get('catchPhrase').value,
        bs: this.form.get('bs').value
      }
    }

    this.save.emit(user);
  }

}
