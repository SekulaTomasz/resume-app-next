import React from 'react'
import CardBody from './CardBody';
import CardFooter from './CardFooter';

import { StyledCardWrapper } from './styled';


const Card = ({children, additionalStyle}) => {
    return (
        <StyledCardWrapper additionalStyle={additionalStyle}>
            {children}
        </StyledCardWrapper>
    )
}

Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card
