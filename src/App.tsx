import { TodoList, AddTodo } from "./components";
import { UseTodo } from "./hooks/UseTodo";

function App(): JSX.Element {
  const {handleAddTodo} = UseTodo();
  return (
    <div className="p-[40px]">
      <h1 className="Title_1">ToDo App</h1>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 p-4 border-2 rounded-xl">
          <TodoList />
        </div>
        <div className="p-4 border-2 rounded-xl">
          <AddTodo handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
