import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoApiService } from '../todo-api.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrl: './showdetails.component.css'
})
export class ShowdetailsComponent implements OnInit {

  todo?:Todo;
  id?:number;
  edit?:boolean=false;
  
  constructor(private router:ActivatedRoute, private todoService:TodoApiService){}
  
  ngOnInit(): void {
      this.router.params.subscribe(
        value => {
          const id = value['id']
          if(id){
              this.todoService.fetchTodoById(id).subscribe(
                response=>this.todo=response
              )
          }
        }
      )
  }


  markAsCompleted(){
    if(this.todo){
      this.todo.status=true;
      this.todoService.updateTodo(this.todo.id,this.todo)
          .subscribe(response=>console.log(response))
    }

  }

  toggleEdit(){
    console.log("hiii"+this.edit);
      if(this.edit==true){
        this.edit=false;
      }
      else
        this.edit=true;
  }

  deleteTodo(){
    if(this.todo && confirm(`Sure to delete : ${this.todo.id} : ${this.todo.title}?`))
      this.todoService.removeTodo(this.todo.id)
          .subscribe((response)=>{
            alert(`${this.todo?.title} Removed`)
            this.todo=undefined
        })
  }
  }
  