import React from 'react';
import { Container, InputText, FlatInputText, ErrorContainer } from './styledComponents';

export default function TextField(props) {
  return (
    <Container>
      {props.flat ?
        <FlatInputText {...props} />
      :
        <InputText
          {...props}
        />}
      {props.error && <ErrorContainer>{props.error}</ErrorContainer>}
    </Container>
  );
}
