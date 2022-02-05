import styled from "styled-components";

export const SubmitButton = styled.button`
  width: 100%;
  padding: 18px;
  margin: 12px 0;
  display: inline-block;
  border: none;
  border-radius: 15px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "#691B33")};
  box-shadow: 0 0 5px #ccc;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  &:hover {
    box-shadow: ${(props) => (props.disabled ? "none" : "0 0 5px #691B33")};
  }
`;