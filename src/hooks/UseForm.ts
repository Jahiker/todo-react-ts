import { useState, FormEventHandler } from "react";
import { TodoDto } from "../ToDo/todo.dto";

const initialState: TodoDto = {
  title: "",
  description: "",
};

export const UseForm = () => {
  const [formState, setFormState] = useState<TodoDto>(initialState);

  const handleInputChange: FormEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e): void => {
    const newFormState: TodoDto = { ...formState };

    if (e.currentTarget.name === "title") {
      newFormState.title = e.currentTarget.value;
    } else if (e.currentTarget.name === "description") {
      newFormState.description = e.currentTarget.value;
    }

    setFormState(newFormState);
  };
  return { handleInputChange, formState };
};
