import { useReducer, useEffect } from "react";
import { reducer } from "../ToDo/todoReducer";
import { Todo } from "../ToDo/todo.model";
import { TodoDto } from "../ToDo/todo.dto";
import { Action, ActionType } from "../ToDo/todoReducer";

const initialState: Todo[] = [];

const init = (): Todo[] => {
  return JSON.parse(localStorage.getItem("todos_list_v1") || '[]') || [];
};

export const UseTodo = () => {
  const [todoList, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos_list_v1", JSON.stringify(todoList))
    console.log(todoList)
  },[todoList])

  const handleAddTodo = (todo: TodoDto): void => {
    const action: Action = {
      type: ActionType.ADD,
      payload: todo
    }

    dispatch(action)
  }


  return {handleAddTodo};
};
