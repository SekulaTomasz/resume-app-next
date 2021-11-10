import React, { forwardRef } from "react";
import { containerPositionEnum } from "../../const/index";
import Pagination from "../Pagination";
import { StyledWrapper, StyleContainer } from "./styled";

const ContentContainer = forwardRef(({
  children,
  additionalStyles,
  position = containerPositionEnum.right,
  identity,
  backgroundColor,
  isMobile
}, ref) => {
  return (
    <StyledWrapper position={position} additionalStyles={additionalStyles} id={identity} ref={ref}>
      {!isMobile && position === containerPositionEnum.left ? <Pagination /> : null}
      <StyleContainer backgroundColor={backgroundColor} isMobile={isMobile}>
        {children}
      </StyleContainer>
      {!isMobile && position === containerPositionEnum.right ? <Pagination /> : null}
    </StyledWrapper>
  );
});

export default ContentContainer;
