import { useState } from 'react';
import axios from 'axios';
import '../App.css';

function TodoAdd() {
  const [form, setForm] = useState({ name: '', writer: '', content: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_API_URL}/c/e7ad-247e-46cf-b3d5`, form)
      .then((res) => {
        console.log('과제 등록 성공!');
        console.dir(res.data, { depth: null });
      });
  };

  return (
    <div className="center-outer full-height">
      <div className="center-inner light-card">
        <h2 className="form-title">과제 등록</h2>
        <form onSubmit={handleSubmit} className="todo-form">
          <label htmlFor="name">제목:</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <label htmlFor="writer">작성자:</label>
          <input
            id="writer"
            name="writer"
            value={form.writer}
            onChange={handleChange}
          />
          <label htmlFor="content">내용:</label>
          <textarea
            id="content"
            name="content"
            value={form.content}
            onChange={handleChange}
          />
          <button type="submit">등록</button>
        </form>
      </div>
    </div>
  );
}

export default TodoAdd;
