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
  width: 75%;
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

export const ContenedorTimeModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContenedorInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;
`;

export const TituloHora = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #4A4A4A;
`;

export const ContenedorHora = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;
`;

export const SeparadorHora = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: bold;
`;

export const ContenedorCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin: 6px 0;
`;

export const CheckboxLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #4A4A4A;
`;

export const ContenedorBotones = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BotonContinuar = styled.button`
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

export const BotonCancelar = styled.button`
  width: 100%;
  padding: 18px;
  margin: 12px 0;
  display: inline-block;
  border: none;
  border-radius: 15px;
  background-color: transparent;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #691b33;
  cursor: pointer;
`;
