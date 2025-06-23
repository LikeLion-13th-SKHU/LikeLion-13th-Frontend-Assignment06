import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './TodoReg.css';

function TodoReg() {
    const [form, setForm] = useState({name:"", writer:"", content:""});
    const navigate = useNavigate();
    const POST_URL = import.meta.env.VITE_POST_URL;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(POST_URL, form)
          .then((response) => {
            console.log("등록 완료", response.data);
          })
          .catch((error) => {
            console.error("등록 실패", error);
          });
    };

    return (
        <div className="register-wrapper">
            <div className="register-container">
                <nav>
                    <Link to="/">투두 리스트</Link>
                    <Link to="/register">등록하기</Link>
                </nav>
                <h2>과제 등록</h2>
                <form onSubmit={handleSubmit}> 
                    <label>제목: <input type="text" name="name" value={form.name} onChange={handleChange} required /></label><br />
                    <label>작성자: <input type="text" name="writer" value={form.writer} onChange={handleChange} required /></label><br />
                    <label>내용: <textarea name="content" value={form.content} onChange={handleChange} required /></label><br />
                    <button type="submit">등록</button>
                </form>
            </div>
        </div>
    );

    
}

export default TodoReg;