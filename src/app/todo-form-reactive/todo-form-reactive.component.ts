import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { todoValidator } from '../../util/ToDoValidator';
import { TodoManagementService } from '../todo-management.service';
import { TodoApiService } from '../todo-api.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-form-reactive',
  templateUrl: './todo-form-reactive.component.html',
  styleUrl: './todo-form-reactive.component.css'
})
export class TodoFormReactiveComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private todoService:TodoApiService){}

  todoForm:any;

  ngOnInit(): void {
      this.todoForm=this.formBuilder.group(
        {
          title:['',[Validators.required,Validators.pattern('[\\w\\s]{3,}')],todoValidator(this.todoService)],
          description:[''],
          deadline:['']
        }
      )
  }

  addTodo(todo:Todo){
    this.todoService.addTodo(todo).subscribe(
      response=>{console.log(response);
        alert("New Task Added "+response.title)
      },
        // error=>console.log(error)
      )
      
    }

    minDate(): string {
      const currentDate = new Date();
      return currentDate.toISOString().split('T')[0];
  }

    
}




