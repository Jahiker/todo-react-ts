import { useReducer } from "react";
import { Todo } from "./ToDo/todo.model";
import { TodoDto } from "./ToDo/todo.dto";

export enum ActionType {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
  TOGGLE = 'TOGGLE',
  EDIT = 'EDIT'
}

interface Action {
  type: ActionType,
  payload: TodoDto
}

const reducer = (todoList: Todo[], action: Action) => {
  switch (action.type) {
    case ActionType.ADD:
      throw new Error('ADD')
      break;
  
    default:
      return todoList
  }
}

function App(): JSX.Element {
  const [todoList, dispatch] = useReducer(reducer, []);

  return (
    <div className="p-[40px]">
      <h1 className="uppercase text-center font-bold">ToDo App</h1>
    </div>
  );
}

export default App;
