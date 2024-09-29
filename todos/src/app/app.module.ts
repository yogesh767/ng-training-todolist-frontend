import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodosComponent } from './components/todos/todos.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatDialogModule ,MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AddmodelComponent } from './components/addmodel/addmodel.component';
import {  MatInputModule} from "@angular/material/input";
import {MatGridListModule} from "@angular/material/grid-list";
import {FormsModule } from "@angular/forms";
import { UpdateModelComponent } from './component/update-model/update-model.component';
import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar'

import {MatTreeModule} from '@angular/material/tree';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodosComponent,
    HeaderComponent,
    AddmodelComponent,
    UpdateModelComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    MatToolbarModule,
    MatTreeModule,
    MatMenuModule
  
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
