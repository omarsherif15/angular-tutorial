import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS, Task } from '../data/tasks';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  isVisible : boolean = false;
  @Input({required : true}) selectedUserId! : string;
  @Input({required : true}) selectedUserName! : string;
  tasks = DUMMY_TASKS;

  get userTasks() {
    return this.tasks.filter(task => task.userId === this.selectedUserId);
  }

  onAddTask() {
    this.isVisible = true;
  }

  onSaveTask(task : Task) {
    this.isVisible = false;
    this.tasks.push(task);
  }

  onClosePopup() {
    this.isVisible = false;
  }

  onTaskCompleted(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

}
