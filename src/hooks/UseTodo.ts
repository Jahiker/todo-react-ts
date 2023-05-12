import { useReducer } from "react";
import { reducer } from "../ToDo/todoReducer";
import { Todo } from "../ToDo/todo.model";

const initialState: Todo[] = [];

const init = (): Todo[] => {
  return JSON.parse(localStorage.getItem("todos_v1") || '[]') || [];
};

export const UseTodo = () => {
  const [todoList, dispatch] = useReducer(reducer, initialState, init);

  return {};
};
