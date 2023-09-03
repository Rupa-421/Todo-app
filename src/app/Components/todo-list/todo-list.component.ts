import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/Services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor(private toDoService:TodoService) {}
listOfTodos:any[];
  ngOnInit(): void {
    this.listOfTodos=this.toDoService.getTask();
 
    
  }
  deleteTask(index:number){

    this.listOfTodos.splice(index,1);
    
  }
  moveUp(index:number){
  this.toDoService.moveUp(index);
  }
  moveDown(index:number){
    this.toDoService.moveDown(index);
  }
  
  

}
