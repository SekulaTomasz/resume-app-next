import React, { useRef } from "react";
import { StyledSVGWrapper } from "./styled";

import useAnimatedMainSvg from "../../hooks/useAnimatedMainSvg";

import TrianglesSvg from "/public/assets/svg/traingles.svg";

const AnimatedTriangles = ({isMobile}) => {
  const trianglesRef = useRef(null);

  useAnimatedMainSvg(trianglesRef);

  return (
    <StyledSVGWrapper ref={trianglesRef} isMobile={isMobile}>
      <TrianglesSvg style={{ height: !isMobile ? "550px" :  "450px"}}  />
    </StyledSVGWrapper>
  );
};

export default AnimatedTriangles;
