import './App.css';
import { TodoWrapper } from './component/Wrapper/TodoWrapper';

function App() {
  return (
    <div className="App">
      <header><h2 className='headline'>Todo List</h2></header>
      <TodoWrapper/>
    </div>
  );
}

export default App;
