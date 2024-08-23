import { useTodos } from "../store/todos";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = useTodos();

  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos");

  let filterData = todos;

  if (todosData === "active") {
    filterData = filterData.filter((task) => !task.completed);
  }

  if (todosData === "completed") {
    filterData = filterData.filter((task) => task.completed);
  }

  return (
    <ul className="w-full">
      {filterData.map((todo) => {
        return (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-50 p-4 mb-3 rounded-lg shadow-sm transition-transform transform hover:scale-105"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodoAsCompleted(todo.id)}
                className="mr-4 h-5 w-5 text-secondary focus:ring-secondary"
              />
              <label
                htmlFor={`todo-${todo.id}`}
                className={`text-lg ${
                  todo.completed ? "line-through text-gray-400" : "text-primary"
                }`}
              >
                {todo.task}
              </label>
            </div>
            {todo.completed && (
              <button
                type="button"
                onClick={() => handleDeleteTodo(todo.id)}
                className="text-red-600 hover:text-red-800 transition duration-200"
              >
                Delete
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Todos;
