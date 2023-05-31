import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskName: string = '';

  @Output() taskAdded = new EventEmitter<{ name: string; completed: boolean }>();

  addTask() {
    const newTask = {
      name: this.taskName,
      completed: false
    };
    this.taskAdded.emit(newTask);
    this.taskName = '';
  }
}
