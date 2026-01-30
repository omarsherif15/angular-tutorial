import { Component, computed, input, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS, Task } from '../data/tasks';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { TasksService } from './tasks.service';
import { DUMMY_USERS } from '../data/dummy-users';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  isVisible: boolean = false;
  userId = input.required<string>();
  userName = computed(() => DUMMY_USERS.find((u) => u.id === this.userId())?.name); // @Input({required : true}) selectedUserName! : string;

  constructor(private tasksService: TasksService) {}

  get userTasks() {
    return this.tasksService.getUserTasks(this.userId());
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
