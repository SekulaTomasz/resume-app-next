import React, { useRef } from "react";
import { StyledSVGWrapper } from "./styled";

import useAnimatedMainSvg from "../../hooks/useAnimatedMainSvg";

import { ReactComponent as TrianglesSvg } from "../../assets/svg/traingles.svg";

const AnimatedTriangles = () => {
  const trianglesRef = useRef(null);

  useAnimatedMainSvg(trianglesRef);

  return (
    <StyledSVGWrapper>
      <TrianglesSvg style={{ height: "550px" }} ref={trianglesRef} />
    </StyledSVGWrapper>
  );
};

export default AnimatedTriangles;
