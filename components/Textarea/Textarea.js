import React from "react";
import {
  StyledSpan,
  StyledWrapper,
  StyledInputBorder,
  StyledTextarea,
} from "./styled";

const Textarea = ({ label,name, onFocus }) => {
  return (
    <StyledWrapper>
      <StyledTextarea type="text" autoComplete="off" required onFocus={onFocus} onBlur={onFocus} name={name} />
      <StyledSpan>{label}</StyledSpan>
      <StyledInputBorder />
    </StyledWrapper>
  );
};

export default Textarea;
