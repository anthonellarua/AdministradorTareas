import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  selectedFilter: string = 'all';
  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();

  changeFilter(filter: string) {
    this.selectedFilter = filter;
    this.filterChanged.emit(filter);
  }
  
}
