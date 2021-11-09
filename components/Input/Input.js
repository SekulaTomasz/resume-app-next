import React from "react";
import { StyledInput, StyledSpan, StyledWrapper,StyledInputBorder} from "./styled";

const Input = ({label, name, type = "text", pattern}) => {
  return (
    <StyledWrapper>
      <StyledInput
        type={type}
        autoComplete="off"
        required
        data-pattern={pattern}
        name={name}
      />
      <StyledSpan>{label}</StyledSpan>
      <StyledInputBorder />
    </StyledWrapper>
  );
};

export default Input;
