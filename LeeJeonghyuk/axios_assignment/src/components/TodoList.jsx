import React from "react";
import { useFetch } from "../hooks/useFetch";
import * as S from "./Style";

export default function TodoList() {
  const apiUrl = import.meta.env.VITE_Server_List_URL;
  const { loading, data, error, errorMessage } = useFetch(`${apiUrl}/endpoint`);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {errorMessage}</div>;

  return (
    <S.Box>
      <div>
        <S.Title>투두 리스트</S.Title>
        {data?.records?.map((record) => (
          <S.List key={record.id}>
            제목: <span>{record.fields.name || "-"}</span> <br />
            작성자: <span>{record.fields.writer || "-"}</span> <br />
            내용: <span>{record.fields.content || "-"}</span> <br />
            작성일: <span>{record.createdTime || "-"}</span> <br />
          </S.List>
        ))}
      </div>
    </S.Box>
  );
}
