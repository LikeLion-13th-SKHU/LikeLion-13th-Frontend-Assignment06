import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { Link } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { Links } from "./components/Style";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Links>
        <Link to="/">투두 리스트</Link>
        <Link to="/add">등록하기</Link>
      </Links>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </Router>
  );
}
