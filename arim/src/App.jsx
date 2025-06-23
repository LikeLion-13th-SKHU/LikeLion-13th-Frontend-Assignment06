import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TodoList from './pages/TodoList';
import TodoForm from './pages/TodoAdd';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="appnav">
          <Link to="/">투두 리스트</Link>
          <Link to="/register">등록하기</Link>
        </nav>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/register" element={<TodoForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
