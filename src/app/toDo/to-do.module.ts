import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoComponent, ToDoFormComponent, ToDoListComponent } from './components';
import { ToDoService } from './service/toDoService';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ToDoComponent,
    ToDoFormComponent,
    ToDoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ToDoComponent,
    ToDoFormComponent,
    ToDoListComponent
  ],
  providers: [
    ToDoService
  ]
})
export class ToDoModule { }
