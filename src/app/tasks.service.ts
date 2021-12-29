import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Task[] = [
    {
      title: "assignment",
      description: "gfsgsfdgdfsgfgfdgfdgf",
      priority: 1,
      duration: 6
    },
  ];

  archivedTasks: Task[] = [
    {
      title: "assignment",
      description: "gfsgsfdgdfsgfgfdgfdgf",
      priority: 1,
      duration: 6
    },
  ];


  constructor() {
    let storedTasks = localStorage.getItem('Tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
    else {
      this.tasks = [];
    }

    let ArchivedTasks = localStorage.getItem('archived');
    if (ArchivedTasks) {
      this.archivedTasks = JSON.parse(ArchivedTasks);
    }
    else {
      this.archivedTasks = [];
    }

  }
  deleteTask(i: number) {
    this.tasks.splice(i, 1);
    this.storeTask();
  }
  deleteArchivedTask(i:number){
    this.archivedTasks.splice(i,1);
    this.storeArchivedTasks();

  }
  saveTask(title: string, priority: number, duration: number, description: string) {
    this.tasks.push({ title, priority, duration, description });
    this.storeTask();

  }
  updateTask(id: any, updatedTask: any) {
    this.tasks[id] = updatedTask;
    this.storeTask();
  }

  storeTask() {
    localStorage.setItem('Tasks', JSON.stringify(this.tasks));
  }
  storeArchivedTasks() {
    localStorage.setItem('archived', JSON.stringify(this.archivedTasks));
  }

  archiveTask(i: number) {
    this.archivedTasks.push(this.tasks[i])
    this.tasks.splice(i, 1);
    this.storeArchivedTasks();
    localStorage.setItem('Tasks', JSON.stringify(this.tasks))
    console.log(this.archivedTasks);
  }


}
