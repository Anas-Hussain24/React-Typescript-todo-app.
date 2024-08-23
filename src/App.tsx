import AddToDo from "./components/addtodo";
import Navbar from "./components/navbar";
import Todos from "./components/todos";

const App = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center p-8">
      <h1 className="text-4x1 font-extrabold text-primary mb-10">
        React + Typescript TODO APP
      </h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl">
        <Navbar />
        <AddToDo />
        <Todos />
      </div>
    </main>
  );
};

export default App;
