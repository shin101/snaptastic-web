import React from "react";
import styled from "styled-components";

interface FormErrorProps {
  message: string;
}

const StyledFormError = styled.span`
  color: tomato;
  font-weight: 600;
  font-size: 12px;
  margin: 10px 0px 5px;
`;

function FormError({ message }: FormErrorProps) {
  return message === "" || !message ? null : (
    <StyledFormError>{message}</StyledFormError>
  );
}

export default FormError;
