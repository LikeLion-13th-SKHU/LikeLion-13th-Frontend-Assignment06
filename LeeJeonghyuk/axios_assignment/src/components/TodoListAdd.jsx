import React, { useState } from "react";
import axios from "axios";
import * as S from "./Style";

export default function TodoListAdd() {
  const apiUrl = import.meta.env.VITE_Server_Add_URL;
  const [todo, setTodo] = useState({
    content: "",
    name: "",
    writer: "",
  });

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/endpoint`);
      console.log("과제 등록 성공!", response.data);
    } catch (error) {
      console.error("과제 등록 실패...", error);
    }
  };

  return (
    <S.Box>
      <div>
        <S.Title>과제 등록</S.Title>
        <form onSubmit={handleSubmit}>
          제목: <br />
          <S.Input
            type="text"
            name="name"
            value={todo.name}
            onChange={handleChange}
          />
          <br />
          작성자: <br />
          <S.Input
            type="text"
            name="writer"
            value={todo.writer}
            onChange={handleChange}
          />
          <br />
          내용: <br />
          <S.TextArea
            cols={30}
            rows={5}
            name="content"
            value={todo.content}
            onChange={handleChange}
          />
          <br />
          <S.Button type="submit">등록</S.Button>
        </form>
      </div>
    </S.Box>
  );
}
