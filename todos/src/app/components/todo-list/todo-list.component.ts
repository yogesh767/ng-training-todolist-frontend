import { Component } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AddmodelComponent } from '../addmodel/addmodel.component';
import { UpdateModelComponent } from '../../component/update-model/update-model.component';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todoList: any = []

  constructor(private todos: TodoServiceService, private dialog: MatDialog) {
    todos.getTodos().subscribe((data: any) => {
      this.todoList = data.data
      console.log(this.todoList)
    })

  }
  gettodos() {
    this.todos.getTodos().subscribe((data: any) => {
      this.todoList = data.data
      console.log(this.todoList)
    })
  }
  showAddDialog() {
    this.dialog.open(AddmodelComponent, { width: "60", height: "500px", hasBackdrop: true })
  }

  showupdateDialog(body:Object) {
    this.dialog.open(UpdateModelComponent, { width: "60", height: "500px", hasBackdrop: true,data:body })
  }

    deleteTodo(id:number){
      this.todos.deleteTodos(id).subscribe((data: any) => {
      })
    }

}
