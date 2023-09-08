import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/Services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  toDo: string;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}
  onAdd() {
    if (this.toDo.trim().length > 0) {
      this.todoService.addTask(this.toDo);
      this.toDo = '';
    }
  }
}
