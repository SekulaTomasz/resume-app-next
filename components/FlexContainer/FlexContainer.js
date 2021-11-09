import React from "react";
import { FlexContainerPositionEnum } from "../../const/index";

import { StyledContainer } from "./styled";

const FlexContainer = ({
  children,
  isColumnDirection,
  additionalStyle,
  position = FlexContainerPositionEnum.left,
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
