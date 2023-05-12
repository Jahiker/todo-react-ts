import { UseForm } from "../hooks/UseForm";

export const AddTodo = () => {
    const {handleInputChange, formState} = UseForm()

  return (
    <div>
      <h2 className="Title_2">Add a new ToDo</h2>
      <form>
        <label className="flex flex-col mb-3">
          <span>Title</span>
          <input
            type="text"
            name="title"
            placeholder="Add a title"
            className="bg-gray-200 border-0 rounded-md form-input"
            value={formState.title}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label className="flex flex-col mb-3">
          <span>Description</span>
          <textarea
            name="description"
            className="bg-gray-200 border-0 rounded-md form-textarea"
            placeholder="Add a description"
            value={formState.description}
            onChange={(e) => handleInputChange(e)}
          ></textarea>
        </label>
        <label className="flex flex-col mb-3">
          <button
            type="submit"
            className="w-full p-3 font-bold text-white bg-blue-700 border-0 rounded-md"
          >
            ADD
          </button>
        </label>
      </form>
    </div>
  );
};
