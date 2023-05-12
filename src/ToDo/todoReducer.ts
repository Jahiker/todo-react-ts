import { TodoDto } from "./todo.dto";
import { Todo } from "./todo.model";

export enum ActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
  TOGGLE = "TOGGLE",
  EDIT = "EDIT",
}

interface Action {
  type: ActionType;
  payload: TodoDto;
}

export const reducer = (todoList: Todo[], action: Action) => {
  switch (action.type) {
    case ActionType.ADD:
      throw new Error("ADD");
      break;

    default:
      return todoList;
  }
};
