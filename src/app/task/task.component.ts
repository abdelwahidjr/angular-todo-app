import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskId:any;
  task:any;

  taskForm :FormGroup = new FormGroup({
    title :new FormControl(null , [Validators.required , Validators.pattern(`^[a-zA-Z0-9_ ]+$`)]),
    priority :new FormControl(null),
    duration :new FormControl(null, [Validators.required , Validators.pattern(`^[0-9]+$`)]),
    description :new FormControl(null , [Validators.required , Validators.pattern(`^[a-zA-Z0-9_ ]+$`)]),
  })

  constructor(private _ActivatedRoute : ActivatedRoute , private _TasksService:TasksService ,private _Router:Router) { }

  ngOnInit(): void {

    this.taskId = this._ActivatedRoute.snapshot.paramMap.get("id");
    this.task = this._TasksService.tasks[this.taskId];
    console.log(this.task);
  }

  updateTask(taskForm:FormGroup){
    this._TasksService.updateTask(this.taskId , this.task);
    this._Router.navigate(['/']);
    console.log(taskForm);
  }

  deleteTask(){
    this._TasksService.deleteTask(this.taskId);
    this._Router.navigate(['/']);

  }

}
