import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS, Task } from '../data/tasks';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { TasksService } from './tasks.service';

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

  constructor(private tasksService: TasksService) {}

  get userTasks() {
    return this.tasksService.getUserTasks(this.selectedUserId);
  }

  onAddTask() {
    this.isVisible = true;
  }

  onClosePopup() {
    this.isVisible = false;
  }

  onTaskCompleted(taskId: string) {
    this.tasksService.completeTask(taskId);
  }

}
