import React from 'react';
import {StyledButton} from './styled';


const ActionButton = (props) => {
    return (
        <StyledButton
            {...props}
        >{props.text}</StyledButton>
    )
}

export default ActionButton;
