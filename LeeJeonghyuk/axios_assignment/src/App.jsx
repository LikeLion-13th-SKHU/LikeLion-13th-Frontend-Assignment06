import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoList from "./components/TodoList";
import TodoListAdd from "./components/TodoListAdd";
import GlobalStyle from "./GlobalStyle";
import { Nav } from "./components/Style";

export default function App() {
  return (
    <Router>
      <Nav>
        <Link to="/">투두 리스트</Link>
        <br />
        <Link to="/todoAdd">등록하기</Link>
      </Nav>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todoAdd" element={<TodoListAdd />} />
      </Routes>
    </Router>
  );
}
