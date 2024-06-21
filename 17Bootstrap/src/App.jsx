import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
// import TodoItem from "./Components/TodoItem";
import "./Components/App.css";
import TodoItems from "./Components/TodoItems";
function App() {
  const todoItems=[{
    name:'Buy Milk',
    dueDate:'19/06/2024',},
    {
    name:'Go to College',
    dueDate:'19/06/2024',},
    {
    name:'Like this video',
    dueDate:'Right Now',
  },];
  return (
  <center className="todo-container">
    <AppName/>
    <AddTodo/>
  <TodoItems todoItems={todoItems}></TodoItems> 
  </center>
  ); 
}

export default App;