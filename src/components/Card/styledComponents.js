import styled from "styled-components";

export const SimpleCard = styled.div`
  width: ${props => props.width || "100%"};
  padding: 24px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.12);
`;