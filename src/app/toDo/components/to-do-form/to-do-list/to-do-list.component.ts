import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ToDoModel } from '../../../type/toDoModel';
import { ToDoService } from '../../../service/toDoService';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  @Input()
  toDos: Array<ToDoModel>;

  @Output()
  refreshToDoList = new EventEmitter();

  constructor(private toDoService: ToDoService) { }

  async updateToDo(toDo: ToDoModel) {
    let isToDoUpdated = await this.toDoService.update(toDo);
    if (isToDoUpdated) {
      this.refreshToDoList.emit();
    //   this.toDoService.inCompleteToDoList()
    //     .then((data) => {
    //       this.toDoList = data;
    //     });
    }
  }

}
