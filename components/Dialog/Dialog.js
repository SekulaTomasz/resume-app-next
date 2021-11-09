import React, { useState, useEffect } from 'react';
import { StyledDialogWrapper, StyledDialogWrapperOverlay, StyledMainDialogContainer,StyledDialogContainer } from './styled';
 
import DialogBody from './DialogBody'
import DialogFooter from './DialogFooter';
import DialogHeader from './DialogHeader';


const Dialog = ({children, size = "50%", isVisible = true, toggle}) => {

    const [displayData, setDisplay] = useState(false)
    
    useEffect(() => {
        if(isVisible) setDisplay(true);
        return () => setDisplay(false);
    }, [])

    useEffect(() => {
        if(isVisible) setDisplay(true);

    }, [isVisible])

    if(!isVisible) return null;

    console.log(displayData);

    return (
        <StyledDialogWrapper size={size} onClick={() => {
            if(isVisible) setDisplay(false);
            toggle();
        }} isVisible={isVisible}>
            <StyledDialogWrapperOverlay />
            <StyledMainDialogContainer displayData={displayData}>
                <StyledDialogContainer>
                    {children}
                </StyledDialogContainer>
            </StyledMainDialogContainer>   
        </StyledDialogWrapper>
    )
}

Dialog.Body = DialogBody;
Dialog.Header = DialogHeader;
Dialog.Footer = DialogFooter;

export default Dialog
