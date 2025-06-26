import styled, { css } from "styled-components";

const Container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: fit-content;
  max-height: fit-content;
  width: 100vw;
  height: 100vh;
  padding: 5vw;
  margin: 0 auto;
  border-radius: 8px;
`;

export const Nav = styled.nav`
  text-align: center;
`;

export const Box = styled.div`
  ${Container}
  background-color: whitesmoke;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 10%;
`;

export const List = styled.div`
  background-color: white;
  border: 1px solid white;
  border-radius: 8px;
  margin-bottom: 10%;
  padding: 20px;
  width: 30vw;
`;

export const Input = styled.input`
  margin: 10px 0;
  border: 1px solid black;
  justify-content: space-between;
  border-radius: 4px;
  flex-grow: 1;
  border: none;
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  width: 100%;
  text-align: center;
`;

export const TextArea = styled.textarea`
  margin: 10px 0;
  border: 1px solid black;
  justify-content: space-between;
  border-radius: 4px;
  flex-grow: 1;
  border: none;
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  width: 100%;
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 8px 10px;
  font-weight: bold;
  border: none;
  color: white;
  background-color: black;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  width: 20%;
`;
