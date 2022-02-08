import styled from "styled-components";

export const Container = styled.div`
`;

export const InputText = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 12px 0;
  display: inline-block;
  border: ${props => props.error ? "1px solid red" : "1px solid #b38e5d"};
  border-radius: 15px;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  ::placeholder {
    color: #691b33;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 600;
  }
  &:focus {
    outline: none;
    border: 1px solid #b38e5d;
    box-shadow: 0 0 5px #b38e5d;
  }
`;

export const FlatInputText = styled.input`
  width: 100%;
  padding: 12px 0px;
  margin: 12px 0;
  display: inline-block;
  border: 0;
  background: transparent;
  border-bottom: 1px solid #b38e5d;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  ::placeholder {
    color: #691b33;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 600;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #b38e5d;
  }
`;

export const ErrorContainer = styled.div`
  color: red;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 300;
`;