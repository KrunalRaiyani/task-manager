import './App.css';
import Form from './components/Form';
import TaskContainer from './components/TaskContainer';

function App() {
  return (
    <div className='container'>
      <h1 className='text-center mt-5'>Task Manager</h1>
      <Form/>
      <TaskContainer/>
    </div>
  );
}

export default App;
