let _userId = 200;
let _toDoId = 200;

export class ToDoModel {
    constructor (
        public title: string,
        public completed: boolean,
        public userId: number = ++_userId,
        public id: number =++_toDoId
    ) { }
}
