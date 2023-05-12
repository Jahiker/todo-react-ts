import { useReducer } from "react";
import { reducer } from "./ToDo/todoReducer";

import { TodoList, AddTodo } from "./components";

function App(): JSX.Element {
  const [todoList, dispatch] = useReducer(reducer, []);

  return (
    <div className="p-[40px]">
      <h1 className="Title_1">ToDo App</h1>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 p-4 border-2 rounded-xl">
          <TodoList />
        </div>
        <div className="p-4 border-2 rounded-xl">
          <AddTodo />
        </div>
      </div>
    </div>
  );
}

export default App;
