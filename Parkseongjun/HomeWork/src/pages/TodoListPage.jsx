import { useEffect, useState } from "react";
import axios from "axios";

export default function TodoListPage() {
  const [todos, setTodos] = useState([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

useEffect(() => {
  // 환경 변수 사용
  axios.get(`${BASE_URL}/c/dc48-4215-4652-b1ba`)
    .then((res) => {
      const parsedTodos = res.data.records.map((record) => {
        const fields = record.fields || {};
        return {
          title: fields.name || "",
          writer: fields.writer || "",
          content: fields.content || "",
          date: record.createdTime || ""
        };
      });
      
      setTodos(parsedTodos);
    })
    .catch((err) => console.error("데이터 오류:", err));
}, []);

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "violet" }}>투두 리스트</h2>
      {Array.isArray(todos) ? todos.map((t, i) => (
        <div key={i} style={{
          border: "1px solid #ccc",
          padding: "15px",
          margin: "10px auto",
          width: "400px",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9"
        }}>
          <p><strong>제목:</strong> {t.title}</p>
          <p><strong>작성자:</strong> {t.writer}</p>
          <p><strong>내용:</strong> {t.content}</p>
          <p><strong>작성일:</strong> {t.date}</p>
        </div>
      )) : <p>로딩 중...</p>}
    </div>
  );
}
