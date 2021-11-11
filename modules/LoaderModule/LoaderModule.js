import React, { useRef, useContext, useEffect } from "react";
import useAnimatedLoader from "../../hooks/useAnimatedLoader";
import { CmsContext } from '../../contexts';

import { StyledSVGWrapper, StyledLoaderWrapper, StyledRocket } from './styled';

const LoaderModule = ({ setAppAsReady }) => {

  const wrapper = useRef(null);

  const { animationEnded, setAsLoaded, setRefresh } = useAnimatedLoader(wrapper, 1.5);

  const { isLoaded } = useContext(CmsContext);

  useEffect(() => {
    if(isLoaded) setAsLoaded(true);
  },[isLoaded])

  useEffect(() => {
    if(animationEnded && isLoaded) setAppAsReady((prev) => !prev);
  },[animationEnded])

  return (
    <StyledLoaderWrapper>
      <StyledSVGWrapper ref={wrapper}>
        <StyledRocket />
      </StyledSVGWrapper>
    </StyledLoaderWrapper>
  );
};

export default LoaderModule;
