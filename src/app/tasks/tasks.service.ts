import { Injectable } from "@angular/core";
import { DUMMY_TASKS, Task } from "../data/tasks";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks: Task[] = DUMMY_TASKS;

    getUserTasks(userId: string): Task[] {
      return this.tasks.filter(task => task.userId === userId);
    }

    addTask(task: Task): void {
      this.tasks.unshift(task);
    }

    completeTask(taskId: string): void {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
  }
