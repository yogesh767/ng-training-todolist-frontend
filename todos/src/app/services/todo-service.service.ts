import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http:HttpClient) {
 
   }
   getTodos(){
      return this.http.get("http://localhost:8080/todos")
   }
   addTodos(data:Object){
    console.log("called",data)
    return this.http.post("http://localhost:8080/todos",data)
   }
   updateTodos(data:Object){
    console.log("called",data)
    return this.http.patch("http://localhost:8080/todos",data)
   }
   deleteTodos(id:Number){
    return this.http.delete("http://localhost:8080/todos/"+id)
   }
}
