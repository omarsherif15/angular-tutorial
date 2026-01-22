import { Component, inject, Input } from '@angular/core';
import { Task } from '../../data/tasks';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [DatePipe, CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input({required : true}) task!: Task;

  private tasksService = inject(TasksService);
  onTaskCompleted() {
    this.tasksService.completeTask(this.task.id);
  }
}
