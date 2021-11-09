import React from 'react'

import { StyledDialogFooter } from './styled';

const DialogFooter = ({children}) => {
    return (
        <StyledDialogFooter>
            {children}
        </StyledDialogFooter>
    )
}

export default DialogFooter
