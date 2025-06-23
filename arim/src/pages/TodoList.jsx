import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/c/dc48-4215-4652-b1ba`)
      .then((res) => {
        setTodos(res.data.records);
      });
  }, []);

  return (
    <div className="center-outer">
      <div className="center-inner">
        <h2>투두 리스트</h2>
        <div className="todo-list">
          {todos.map((item) => (
            <div className="todo" key={item.id}>
              <div>제목: {item.fields.name}</div>
              <div>작성자: {item.fields.writer}</div>
              <div>내용: {item.fields.content}</div>
              <div>작성일: {new Date(item.createdTime).toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
