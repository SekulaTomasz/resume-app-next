import React, { forwardRef } from 'react';


import { StyledSource, StyledTarget, StyledRippleWrapper,StyledContentWrapper,StyledMailSentSVG } from './styled';

const RippleMask = forwardRef((_props,ref) => {
    return (
        <StyledRippleWrapper ref={ref} >
            <StyledSource ><StyledContentWrapper><StyledMailSentSVG /></StyledContentWrapper></StyledSource>
            <StyledTarget />  
        </StyledRippleWrapper >
    )
});

RippleMask.displayName = 'RippleMask';
    
export default RippleMask;