import React, { forwardRef } from 'react';


import { StyledSource, StyledTarget, StyledRippleWrapper,StyledContentWrapper,StyledMailSentSVG } from './styled';

const RippleMask = forwardRef(({ children, shouldContentDisplay },ref) => {

    return (
        <StyledRippleWrapper ref={ref} >
            <StyledSource ><StyledContentWrapper><StyledMailSentSVG /></StyledContentWrapper></StyledSource>
            <StyledTarget />  
        </StyledRippleWrapper >
    )
})
    
export default RippleMask;