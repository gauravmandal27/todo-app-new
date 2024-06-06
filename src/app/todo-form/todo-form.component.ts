import { Component, Input } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {

  // title?:string;
  @Input("todos")
  todos?:Array<Todo>

  // setTitle(title:string){
  //   this.title=title;
  // }

  addTodo(todo:any){
      this.todos?.push(todo)
  }

}
