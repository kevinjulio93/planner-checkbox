import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'planner-checkbox',
  templateUrl: 'planner-checkbox.html'
})
export class PlannerCheckboxComponent {

  @Input() buttons: boolean = true;
  @Input() title: string;
  @Input() subtitle: string = '';
  @Input() color: string = '#5CBCB9';
  @Input() completed: boolean;
  @Output() completedChange: EventEmitter<boolean>;
  @Output() edit: EventEmitter<void>;
  @Output() delete: EventEmitter<void>;

  constructor() {
    this.completedChange = new EventEmitter<boolean>();
    this.edit = new EventEmitter<void>();
    this.delete = new EventEmitter<void>();
  }

  toggleCompleted(completed) {
    this.completed = completed;
    this.completedChange.emit(this.completed);
  }

  clickEdit() {
    this.edit.emit()
  }

  clickDelete() {
    this.delete.emit()
  }

}
