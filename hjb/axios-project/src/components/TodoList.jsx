import { useFetch } from "../hooks/useFetch";
import styled from "styled-components";

const Container = styled.div`
  background-color: aliceblue;
  width: 620px;
  height: 610px;
  border-radius: 5px;
  box-shadow: 3px 2px 8px #f5f5f5;
`;

const Title = styled.p`
  text-align: center;
  color: blue;
  padding: 50px 30px 10px 30px;
  margin: 30px 20px 20px 20px;
  font-size: 20px;
  font-weight: bold;
`;

const Box = styled.div`
  background-color: white;
  margin: 30px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 1px 5px 5px #f5f5f5;
`;

const Text = styled.div`
  display: flex;
  margin: 3px;
`;

const Strong = styled.strong`
  width: 70px;
`;

const Span = styled.span`
  flex: 1;
`;

export default function TodoList() {
  const { data: todos } = useFetch("");

  return (
    <Container>
      <Title>투두 리스트 </Title>
      {todos.map((todo) => (
        <Box key={todo.id}>
          <Text>
            <Strong>제목: </Strong>
            <Span>{todo.fields.name ? todo.fields.name : "-"}</Span>
          </Text>
          <Text>
            <Strong>작성자: </Strong>
            <Span>{todo.fields.writer ? todo.fields.writer : "-"}</Span>
          </Text>
          <Text>
            <Strong>내용: </Strong>
            <Span>{todo.fields.content ? todo.fields.content : "-"}</Span>
          </Text>
          <Text>
            <Strong>작성일: </Strong>
            <Span>
              {todo.createdTime
                ? new Date(todo.createdTime).toLocaleString("ko-KR")
                : "-"}
            </Span>
          </Text>
        </Box>
      ))}
    </Container>
  );
}
