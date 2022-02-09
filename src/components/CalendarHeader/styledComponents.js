import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 7vh;
  width: 100%;
  background: ${props => props.isRoot ? "#691b33" : "#f7f5f1"};
`;

export const HeaderTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => (props.isRoot ? "#FFF" : "#13322B")};
`;