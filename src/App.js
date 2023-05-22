import './App.css';
import { TodoWrapper } from './component/Wrapper/TodoWrapper';
import { BackgroundContainer } from './component/Background/BackgroundContainer';
function App() {
  return (
    <div className="App">
      <BackgroundContainer/>
      <header><h2 className='headline'>Todo List</h2></header>
      <TodoWrapper/>
    </div>
  );
}

export default App;
