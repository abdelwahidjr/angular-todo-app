import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addTaskForm :FormGroup = new FormGroup({
    title :new FormControl(null , [Validators.required , Validators.pattern(`^[a-zA-Z0-9_ ]+$`)]),
    priority :new FormControl(null),
    duration :new FormControl(null, [Validators.required , Validators.pattern(`^[0-9]+$`)]),
    description :new FormControl(null , [Validators.required , Validators.pattern(`^[a-zA-Z0-9_ ]+$`)]),
  })
  

  constructor(private _TasksService:TasksService , private _Router:Router) { }

  ngOnInit(): void {
  }
  saveTask(title :any, priority :any ,duration :any, description:any  , addTaskForm : FormGroup){
    this._TasksService.saveTask(title.value , priority.value ,duration.value , description.value )
    this._Router.navigate(['']);
    console.log(addTaskForm);
  }
}
