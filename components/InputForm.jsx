import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 5px 0;
`;
const SpanTemplate = styled.span`
  display: block;
`;

const TitleInputText = styled(SpanTemplate)`
  color: var(--Very-dark-violet);
  font-size: var(--x2normal-font-size);
`;
const ErrorInputText = styled(SpanTemplate)`
  color: var(--input-errors);
  font-size: var(--small-font-size);
`;
const InputText = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: none;
  border: 1pt solid rgba(0, 0, 0, 0.5);
  transition: 0.3s border ease-in-out;
  border-radius: 5px;
  &:focus {
    border: 1pt solid var(--active-input);
  }
`;

const InputForm = ({ title, type, error, currentValue, handlerValue }) => {
  return (
    <Container>
      <TitleInputText> {title} </TitleInputText>
      <InputText type={type} onChange={} />
      <ErrorInputText> {error} </ErrorInputText>
    </Container>
  );
};

export default InputForm;
