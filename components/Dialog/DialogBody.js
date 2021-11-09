import React from 'react';

import { StyledDialogBody } from './styled';

const DialogBody = ({children}) => {
    return (
        <StyledDialogBody>
            {children}   
        </StyledDialogBody>
    )
}

export default DialogBody
