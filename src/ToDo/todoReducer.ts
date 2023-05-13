import { TodoDto } from "./todo.dto";
import { Todo } from "./todo.model";

export enum ActionType {
  ADD = "ADD",
  REMOVE = "REMOVE",
  TOGGLE = "TOGGLE",
  EDIT = "EDIT",
}

export interface Action {
  type: ActionType;
  payload: TodoDto;
}

export const reducer = (todoList: Todo[], action: Action) => {
  switch (action.type) {
    case ActionType.ADD:
      return [...todoList, action.payload];

    case ActionType.REMOVE:
      return todoList.filter((todo) => todo.id !== action.payload.id);

    case ActionType.TOGGLE:
      return todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.status = todo.status === "Done" ? "Pending" : "Done";
        }
      });

    case ActionType.EDIT:
      return todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo = { ...todo, ...action.payload };
        }
      });

    default:
      return todoList;
  }
};
