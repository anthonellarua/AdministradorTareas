import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { name: string; completed: boolean }[] = [];

  taskStatus: boolean[] = [];

  toggleTaskStatus(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.taskStatus[index] = this.tasks[index].completed;
  }
}
