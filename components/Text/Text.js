import React from "react";

import { StyledText } from "./styled";


const Text = ({
  value = "",
  fontWeight = 500,
  size,
  isInitialTransform,
  additionalStyle,
  isVisible = true,
}) => {
  return (
    <StyledText
      size={size}
      isInitialTransform={isInitialTransform}
      fontWeight={fontWeight}
      isVisible={isVisible}
      additionalStyle={additionalStyle}
    >
      {value}
    </StyledText>
  );
};

export default Text;
