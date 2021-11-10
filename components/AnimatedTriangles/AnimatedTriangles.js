import React, { useRef } from "react";
import { StyledSVGWrapper } from "./styled";

import useAnimatedMainSvg from "../../hooks/useAnimatedMainSvg";

import TrianglesSvg from "/public/assets/svg/traingles.svg";

const AnimatedTriangles = () => {
  const trianglesRef = useRef(null);

  useAnimatedMainSvg(trianglesRef);

  return (
    <StyledSVGWrapper ref={trianglesRef}>
      <TrianglesSvg style={{ height: "550px" }}  />
    </StyledSVGWrapper>
  );
};

export default AnimatedTriangles;
