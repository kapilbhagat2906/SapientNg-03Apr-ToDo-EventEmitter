import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../service/toDoService';
import { ToDoModel } from '../../type/toDoModel';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {

  toDoList: Array<ToDoModel>;
  toDoTitle: string;

  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
    this.toDoService.inCompleteToDoList()
      .then((data) => {
        this.toDoList = data;
      });
  }

  async saveToDo () {
    if (this.toDoTitle) {
      let isToDoSaved = await this.toDoService.save(new ToDoModel(this.toDoTitle, false));
      if (isToDoSaved) {
        this.toDoTitle = '';
        this.toDoList = await this.toDoService.inCompleteToDoList();
      }
    }
  }

  async refreshToDos () {
    this.toDoList = await this.toDoService.inCompleteToDoList();
  }

}
