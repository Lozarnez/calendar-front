import styled from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const ContenedorModal = styled.div`
  width: 50%;
  min-height: 25%;
  background: #FFF;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;

  display: ${props => props.loading ? 'flex' : 'block'};
  justify-content: center;

  @media (min-width: 400px) {
    width: 25%;
  }
`;

export const Encabezado = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: #691b33;
  }
`;

export const BotonCerrar = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 5px;
  color: #F4F4F4;

  &:hover {
    background: #F4F4F4;
  }

`;