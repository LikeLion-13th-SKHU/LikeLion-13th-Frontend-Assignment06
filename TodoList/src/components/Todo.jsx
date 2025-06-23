import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Todo.css';

function Todo() {
    const [todos, setTodos] = useState([]);
    const GET_URL = import.meta.env.VITE_GET_URL;

    useEffect(() => {
        axios.get(GET_URL)
          .then((response) => {setTodos(response.data.records);})
          .catch((error) => console.error('불러오는데 실패하였습니다:', error));
    }, []);

    return (
        <div className="todo-container">
            <nav>
                <Link to="/">투두 리스트</Link>
                <Link to="/register">등록하기</Link>
            </nav>
            <h2>투두 리스트</h2>
            {todos.map((todo, idx) => (
                <div key={idx} className="todo-item">
                    <p><strong>제목: </strong>{todo.fields.name}</p>
                    <p><strong>작성자: </strong>{todo.fields.writer}</p>
                    <p><strong>내용: </strong>{todo.fields.content}</p>
                    <p><strong>작성일: </strong>{new Date(todo.createdTime).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
}

export default Todo;