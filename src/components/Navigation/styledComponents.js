import styled from "styled-components";

export const Contenedor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 7vh;
`;

export const ContenedorTitulo = styled.div`
  width: auto;
  border-bottom: ${props => props.isActive ? '2px solid #691b33' : 'none'};
`;

export const Titulo = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #691b33;
  margin: 0;
`;
