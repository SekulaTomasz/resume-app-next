import React, { forwardRef } from "react";
import { ContainerPositionEnum } from "../../const/index";
import Pagination from "../Pagination";
import { StyledWrapper, StyleContainer } from "./styled";

const ContentContainer = forwardRef(({
  children,
  additionalStyles,
  position = ContainerPositionEnum.right,
  identity,
  backgroundColor,
  isMobile
}, ref) => {
  return (
    <StyledWrapper position={position} additionalStyles={additionalStyles} id={identity} ref={ref}>
      {!isMobile && position === ContainerPositionEnum.left ? <Pagination /> : null}
      <StyleContainer backgroundColor={backgroundColor} isMobile={isMobile}>
        {children}
      </StyleContainer>
      {!isMobile && position === ContainerPositionEnum.right ? <Pagination /> : null}
    </StyledWrapper>
  );
});

export default ContentContainer;
