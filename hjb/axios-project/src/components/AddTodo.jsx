import { useState } from "react";
import styled from "styled-components";
import { postInstance } from "../utils/axiosClient";

const Container = styled.div`
  background-color: aliceblue;
  width: 420px;
  height: 350px;
  border-radius: 10px;
  padding: 0px 20px 0 20px;
`;

const Btn = styled.button`
  background-color: blue;
  color: white;
  width: 70px;
  margin-top: 10px;
  margin-left: 5px;
  font-weight: bold;
  border: none;
  padding: 10px;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: aqua;
  }
`;

const Title = styled.p`
  margin-top: 20px;
  padding: 30px 20px 20px 5px;
  font-size: 25px;
  font-weight: bold;
`;

const Box = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: 500;
`;

const Input = styled.input`
  border-radius: 2px;
  border: 1px solid gray;
`;

const Textarea = styled.textarea`
  border-radius: 2px;
  border: 1px solid gray;
`;

const ErrorMsg = styled.div`
  margin-top: 10px;
  color: red;
  text-align: center;
`;

export default function AddTodo() {
  const [name, setName] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || writer.trim() === "" || content.trim() === "") {
      setErrorMsg("모든 항목을 입력해주세요.");
      console.log("과제 등록 실패");
      return;
    }

    try {
      const response = await postInstance.post("", {
        fields: {
          name,
          writer,
          content,
        },
      });

      console.log("과제 등록 성공!", response.data); //과제 등록 성공시 콘솔 출력

      //과제 등록 후 초기화
      setName("");
      setContent("");
      setWriter("");
      setErrorMsg("");
    } catch (error) {
      console.error("과제 등록 실패 서버 원인 ", error);
      setErrorMsg("서버 오류");
    }
  };

  return (
    <Container>
      <Title>과제 등록</Title>
      <form onSubmit={handleSubmit}>
        <Box>
          <Label>제목: </Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Box>
        <Box>
          <Label>작성자: </Label>
          <Input value={writer} onChange={(e) => setWriter(e.target.value)} />
        </Box>
        <Box>
          <Label>내용: </Label>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Box>
        <Btn type="submit">등록</Btn>
      </form>
      {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </Container>
  );
}
