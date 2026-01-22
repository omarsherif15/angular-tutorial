import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Task } from '../../data/tasks';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task-form',
  imports: [FormsModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.scss',
})
export class AddTaskFormComponent {
  @Input() selectedUserId!: string;
  @Output() closePopup = new EventEmitter<void>();
  private tasksService = inject(TasksService);

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
    this.tasksService.addTask(task);
    this.closePopup.emit();
  }
}
