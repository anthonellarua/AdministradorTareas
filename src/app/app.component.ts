import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { name: string; completed: boolean }[] = [];

  taskFilter: string = 'all';
  filteredTasks: { name: string; completed: boolean }[] = [];

  filterTasks() {
    if (this.taskFilter === 'all') {
      this.filteredTasks = this.tasks;
    } else if (this.taskFilter === 'completed') {
      this.filteredTasks = this.tasks.filter(task => task.completed);
    } else if (this.taskFilter === 'incomplete') {
      this.filteredTasks = this.tasks.filter(task => !task.completed);
    } else {
      this.filteredTasks = this.tasks;
    }
  }

  addTask(taskName: string) {
    const newTask = {
      name: taskName,
      completed: false
    };
    this.tasks.push(newTask);
    this.filterTasks();
  }
}
