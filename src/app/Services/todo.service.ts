import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  listOfTodos: any[] = [];
  constructor() {}
  addTask(task: string) {
    this.listOfTodos.push({value:task,checked:false});
  }

  getTask() {
    
    return this.listOfTodos;
  }
  moveUp(index:number){
   
    if (index > 0 && index < this.listOfTodos.length) {
      const temp = this.listOfTodos[index];
      this.listOfTodos[index] = this.listOfTodos[index - 1];
      this.listOfTodos[index - 1] = temp;
    }
  
  }
  moveDown(index:number){
    if (index >= 0 && index < this.listOfTodos.length-1) {
      const temp = this.listOfTodos[index];
      this.listOfTodos[index] = this.listOfTodos[index + 1];
      this.listOfTodos[index + 1] = temp;
    }
    
  }
  replace(previndex:number,curindex:number){
 const temp=this.listOfTodos[previndex];
 this.listOfTodos[previndex]=this.listOfTodos[curindex];
 this.listOfTodos[curindex]=temp;
  }
}
