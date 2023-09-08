import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/Services/todo.service';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  incompleteTasks: any[] = [];
  completedTasks: any[] = [];
  isDragging = false;
  listOfTodos: any[];

  constructor(private toDoService: TodoService) {}

  ngOnInit(): void {
    this.listOfTodos = this.toDoService.getTask();

    // Separate tasks into incomplete and completed lists
    this.incompleteTasks = this.listOfTodos.filter((task) => !task.checked);
    this.completedTasks = this.listOfTodos.filter((task) => task.checked);
  }

  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        this.listOfTodos,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      console.log('this is called');
      // Handle items dropped from one container to another
    }
  }

  onDragStarted() {
    this.isDragging = true;
  }

  deleteTask(index: number) {
    this.listOfTodos.splice(index, 1);
  }

  // moveUp(index: number) {
  //   if (index > 0) {
  //     moveItemInArray(this.listOfTodos, index, index - 1);
  //   }
  // }

  // moveDown(index: number) {
  //   if (index < this.listOfTodos.length - 1) {
  //     moveItemInArray(this.listOfTodos, index, index + 1);
  //   }
  // }
}
