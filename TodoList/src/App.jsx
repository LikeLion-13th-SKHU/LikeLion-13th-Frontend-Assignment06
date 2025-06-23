import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './components/Todo';
import TodoReg from './components/TodoReg';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/register" element={<TodoReg />} />
      </Routes>
    </Router>
  );
}

export default App;