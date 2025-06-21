import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import AddTodoPage from "./pages/AddTodoPage";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      {/* 라우터로 페이지 간의 이동 가능 */}
      <Routes>
        <Route path="/" element={<TodoListPage />} />
        <Route path="/add" element={<AddTodoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
