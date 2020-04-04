import { Injectable } from '@angular/core';
import { ToDoModel } from '../type/toDoModel';
import toDoDataList from '../mock/toDo.mock.json';

@Injectable()
export class ToDoService {
    toDos: Array<ToDoModel>;

    constructor () {
        this.toDos = toDoDataList;
    }

    listAll (): Promise<Array<ToDoModel>> {
        return new Promise((resolve) => {
            resolve(this.toDos);
        });
    }

    save (toDoData: ToDoModel): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let isDataSaved: boolean = false;

            try {
                let toDoitemWithSameId: ToDoModel = this.toDos.find((toDoItem) => toDoItem.id === toDoData.id);
                if (!toDoitemWithSameId) {
                    this.toDos.unshift(toDoData);
                    isDataSaved = true;
                }
            } catch (exception) {
                console.log(exception);
                reject(isDataSaved);
            }

            resolve(isDataSaved);
        });
    }

    update (toDoData: ToDoModel): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let isDataUpdated: boolean = false;

            try {
                let toDoItemToUpdate: ToDoModel = this.toDos.find((toDoItem) => toDoItem.id === toDoData.id);
                if (toDoItemToUpdate) {
                    toDoItemToUpdate.completed = toDoData.completed;
                    isDataUpdated = true;
                }
            } catch (exception) {
                console.log(exception);
                reject(isDataUpdated);
            }

            resolve(isDataUpdated);
        });
    }

    completedList (): Promise<Array<ToDoModel>> {
        return new Promise((resolve, reject) => {
            let completedToDoList: Array<ToDoModel> = this.toDos.filter((toDoItem) => toDoItem.completed);
            resolve(completedToDoList);
        });
    }

    inCompleteToDoList(): Promise<Array<ToDoModel>> {
        return new Promise((resolve, reject) => {
            let inCompleteToDos: Array<ToDoModel> = this.toDos.filter((toDoItem) => !toDoItem.completed);
            resolve(inCompleteToDos);
        });
    }

}
