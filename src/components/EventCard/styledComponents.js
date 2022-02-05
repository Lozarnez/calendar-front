import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  padding: 10px 20px;
  background: ${(props) => !props.green ? "#13322b" : "#FFF"};
  border-radius: 10px;
`;

export const Titulo = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: ${props => !props.green ? "#FFF" : "#691b33"};
`;

export const Hora = styled.span`
  font-size: 0.8rem;
  font-weight: 300;
  color: ${(props) => (!props.green ? "#FFF" : "#691b33")}; ;
`;