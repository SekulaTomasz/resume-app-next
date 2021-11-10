import React from "react";
import { flexcontainerPositionEnum } from "../../const/index";

import { StyledContainer } from "./styled";

const FlexContainer = ({
  children,
  isColumnDirection,
  additionalStyle,
  position = flexcontainerPositionEnum.left,
  onClick,
}) => {
  return (
    <StyledContainer
      position={position}
      isColumnDirection={isColumnDirection}
      additionalStyle={additionalStyle}
      onClick={onClick}
    >
      {children}
    </StyledContainer>
  );
};

export default FlexContainer;
