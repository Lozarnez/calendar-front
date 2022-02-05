import styled from "styled-components";

export const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 86vh;
  background-color: ${props => props.bgColor || 'transparent'};
  overflow: auto;
`;