import { useState } from "react";
import axios from "axios";

export default function AddTodoPage() {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");

  const BASE_URL = import.meta.env.VITE_BASE_URL;  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTodo = {
      fields: {
        name: title,
        writer: writer,
        content: content
      }
    };
// 필수 요구 사항 - 등록 버튼 구현 만족
    try {
      // 환경 변수 사용
      const res = await axios.post(`${BASE_URL}/c/e7ad-247e-46cf-b3d5`, newTodo);
      console.log("과제 등록 성공!");
      console.log(res.data); 
      alert("등록 완료!");
    } catch (err) {
      console.error("등록 실패:", err);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>과제 등록</h2>
      <form onSubmit={handleSubmit} style={{
        display: "inline-block",
        textAlign: "left",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)"
      }}>
        <div style={{ marginBottom: "10px" }}>
          <label>제목: <br />
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: "100%" }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>작성자: <br />
            <input
              value={writer}
              onChange={(e) => setWriter(e.target.value)}
              style={{ width: "100%" }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>내용: <br />
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              style={{ width: "100%" }}
              required
            />
          </label>
        </div>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <button type="submit" style={{ padding: "6px 16px" }}>등록</button>
        </div>
      </form>
    </div>
  );
}

