import { Component, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { TodoServiceService } from '../../services/todo-service.service';

@Component({
  selector: 'app-update-model',
  templateUrl: './update-model.component.html',
  styleUrl: './update-model.component.css'
})
export class UpdateModelComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private todos: TodoServiceService,private dialog:MatDialog
  ) {
    this.data.due_date = new Date(this.data.due_date);
  }
  updateTodos(body: Object) {
    this.dialog.closeAll()
    this.todos.updateTodos({...body,id:this.data.id}).subscribe((result)=>{
    })
  }
 
}
