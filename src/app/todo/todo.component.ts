import { Component, Input } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  @Input("todo")
  todo?:Todo;

  markAsCompleted(){
    if(this.todo){
    this.todo.status=true;
    }
  }
}