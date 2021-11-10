import React, { forwardRef } from 'react'
import { StyledFormWrapper,StyledMainFormContainer } from './styled'


const Form = forwardRef(({children, isMobile}, ref) => {
    return (
        <StyledFormWrapper isMobile={isMobile} ref={ref}>
            <StyledMainFormContainer>
                {children}
            </StyledMainFormContainer>
        </StyledFormWrapper>
    )
})

Form.displayName = 'Form';

export default Form;
