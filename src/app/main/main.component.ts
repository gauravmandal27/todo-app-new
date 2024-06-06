import { Component } from '@angular/core';
import { Todo } from '../todo.model';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  todos:Array<Todo>=[
    {
      title:"Learn Java",
      description:"Learn Java from scratch",
      status:true
    },
    {
      title:"Learn Angular",
      description:"Learn Angular from scratch",
      status:false
    },
    {
      title:"Learn React",
      description:"Learn React from scratch",
      status:false
    },
    {
      title:"Learn Python",
      description:"Learn Python from scratch",
      status:false
    },
    {
      title:"Learn Spring Boot",
      description:"Learn Spring Boot from scratch",
      status:false
    }
  ];



}
