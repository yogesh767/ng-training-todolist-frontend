import { Component } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';
import {NgForm} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-addmodel',
  templateUrl: './addmodel.component.html',
  styleUrl: './addmodel.component.css'
})
export class AddmodelComponent {
  constructor( private todos: TodoServiceService,private dialog:MatDialog){

  }
  addTodos(body: NgForm) {
    this.dialog.closeAll()
    this.todos.addTodos(body).subscribe((result)=>{
    })
   
  }
}
