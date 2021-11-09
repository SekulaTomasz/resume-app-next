import React from 'react';

import { StyledCardFooter } from './styled';;

const CardFooter = ({children}) => {
    return (
        <StyledCardFooter>
            {children}
        </StyledCardFooter>
    )
}

export default CardFooter
