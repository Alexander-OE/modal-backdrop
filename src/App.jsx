import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";

function App() {
  function changeState() {
    setState(true);
  }
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
    </div>
  );
}

export default App;
