import logo from "./logo.svg";
import "./App.css";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";

function App() {
  return (
    <div className="App">
      <AddTask></AddTask>
      <ListTask />
    </div>
  );
}

export default App;
