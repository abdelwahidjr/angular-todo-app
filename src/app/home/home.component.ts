import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _TasksService:TasksService) { }

  ngOnInit(): void {
  }
  deleteTask(i:number){
    this._TasksService.deleteTask(i);
  }
  deleteArchivedTask(i:number){
    this._TasksService.deleteArchivedTask(i);
  }


  archiveTask(i:number){
    this._TasksService.archiveTask(i);
  }
 

}
