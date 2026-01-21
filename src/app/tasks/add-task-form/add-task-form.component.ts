import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../data/tasks';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task-form',
  imports: [FormsModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.scss',
})
export class AddTaskFormComponent {
  @Input() isVisible!: boolean;
  @Input() selectedUserId!: string;
  @Output() closePopup = new EventEmitter<void>();
  @Output() saveTask = new EventEmitter<Task>();

  title: string = '';
  dueDate: string = '';
  summary: string = '';

  onClosePopup() {
    this.closePopup.emit();
  }

  onTaskSubmitted() {
    const task: Task = {
      id: Math.random().toString(),
      userId: this.selectedUserId,
      title: this.title,
      dueDate: new Date(this.dueDate),
      description: this.summary,
    };
    this.saveTask.emit(task);
  }
}
