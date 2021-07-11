import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { observable, Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiurl = 'http://localhost:5000/tasks' 

  constructor(private http:HttpClient) { }

  getTasks(){
    return this.http.get<Task[]>(this.apiurl)
  }

  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiurl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task:Task): Observable<Task>{
    const url = `${this.apiurl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.apiurl,task, httpOptions);
  }
}
