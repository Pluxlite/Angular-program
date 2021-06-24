import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { Observable} from 'rxjs'

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
}
