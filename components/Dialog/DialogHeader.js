import React from 'react'

import { StyledDialogHeader } from './styled';

const DialogHeader = ({children}) => {
    return (
        <StyledDialogHeader>
            {children}
        </StyledDialogHeader>
    )
}

export default DialogHeader
