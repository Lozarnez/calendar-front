import React from 'react';
import { Container, InputText, ErrorContainer } from './styledComponents';

export default function TextField(props) {
  return (
    <Container>
      <InputText
        {...props}
      />
      {props.error && <ErrorContainer>{props.error}</ErrorContainer>}
    </Container>
  );
}
