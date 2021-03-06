import React from "react";
import { StyledHeader, StyledWrapper,StyledUnderline } from "./styled";

const Header = ({wrapperStyle = null, text = "", textColor, textUndeline, textUnderlineColor, isMobile}) => {
  
  return (
    <StyledWrapper wrapperStyle={wrapperStyle}>
      <StyledHeader textColor={textColor} isMobile={isMobile}>{text}</StyledHeader>
      {textUndeline ? <StyledUnderline textUnderlineColor={textUnderlineColor}/> : null}
    </StyledWrapper>
  );
};

export default Header;
