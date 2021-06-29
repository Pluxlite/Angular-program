import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {Task} from '../../Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { Console } from 'console';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task = {text:"", day:"", reminder: false};
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter<Task>();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {
  }

  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Task){
    this.onToggleReminder.emit(task);
  }
}
