import React from 'react'
import { StyledCardBody } from './styled';

const CardBody = ({children}) => {
    return (
        <StyledCardBody>
            {children}
        </StyledCardBody>
    )
}

export default CardBody
