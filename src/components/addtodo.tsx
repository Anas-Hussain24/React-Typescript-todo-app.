import { FormEvent, useState } from "react";
import { useTodos } from "../store/todos";

const AddToDo = () => {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = useTodos();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim()) {
      handleAddTodo(todo);
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex mb-6">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="flex-grow border border-gray-300 rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-secondary transition duration-200"
        placeholder="Add a new task"
      />
      <button
        type="submit"
        className="bg-accent text-white rounded-r-lg p-3 hover:bg-accent-dark transition duration-200"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddToDo;
