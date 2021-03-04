import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Todo } from '../../types';

@Component({
  selector: 'app-todo-form',
  template: `
    <h2>Todo
      <a routerLink="/todos" mat-mini-fab color="primary" aria-label="Add new todo">
        <mat-icon>arrow_back</mat-icon>
      </a>
    </h2>
    <form [formGroup]="form" (ngSubmit)="onSave()">
      <mat-form-field class="full-width">
        <mat-label>title</mat-label>
        <input
          required
          matInput
          formControlName="title"
          [placeholder]="'title'"
        />
        <mat-error *ngIf="form.get('title').invalid"
          >title is <strong>Required</strong></mat-error
        >
      </mat-form-field>
      <mat-form-field class="full-width">
        <mat-label>userId</mat-label>
        <input
          required
          matInput
          formControlName="userid"
          [placeholder]="'userId'"
        />
        <mat-error *ngIf="form.get('userid').invalid"
          >userId is <strong>Required</strong></mat-error
        >
      </mat-form-field>
      <div class="full-width">
        <mat-checkbox class="full-width"
          formControlName="completed"
        >
        Completed
        </mat-checkbox>
      </div>
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
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {

  @Input() todo: Todo;

  @Output() save = new EventEmitter<Todo>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      userid: ['', Validators.required],
      title: ['', Validators.required],
      completed: [false, Validators.required]
    });
  }
  ngOnChanges(changes) {
    if (changes["todo"].currentValue) {
      this.form.patchValue(changes["todo"].currentValue);
    }
  }

  ngOnInit(): void {}

  onSave() {
    const todo: Todo = {
      id: this.todo?.id,
      userid: this.form.get('userid').value,
      title: this.form.get('title').value,
      completed: this.form.get('completed').value
    }

    this.save.emit(todo);
  }

}
