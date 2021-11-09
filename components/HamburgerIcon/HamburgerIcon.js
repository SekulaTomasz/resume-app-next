import React from 'react';



import { StyledIconWrapper, StyledSpanIcon} from './styled';

const HamburgerIcon = ({ isOpen, toggle, currentPageIndex, setPageIndex }) => {
    
    return (
        <StyledIconWrapper isOpen={isOpen} onClick={toggle}>
            <StyledSpanIcon />
            <StyledSpanIcon />
            <StyledSpanIcon />
        </StyledIconWrapper>
    )
}

export default HamburgerIcon
