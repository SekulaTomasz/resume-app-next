import styled from "styled-components";

import appearanceVariables from '../../configs/appearanceVariables.json';

const StyledSpanIcon = styled.span`
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background: ${appearanceVariables.colors.primary};
    border-radius: 10px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;

    :nth-child(1) { 
        top: 0px;
    }
    :nth-child(2) {
        top: 16px;
    }
    :nth-child(3) {
        top: 32px;
    }
`

const StyledIconWrapper = styled.div`
    z-index: 100;
    width: 50px;
    height: 45px;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
    position: absolute;
    align-self: center;
    margin: 1rem;
    right: 0;

    ${({isOpen}) => {
        if(!isOpen) return "";
        return `
            ${StyledSpanIcon}:nth-child(1) {
                top: 18px;
                transform: rotate(135deg);
            }
            ${StyledSpanIcon}:nth-child(2) {
                opacity: 0;
                left: -60px;
            }
            ${StyledSpanIcon}:nth-child(3) {
                top: 18px;
                transform: rotate(-135deg);
              }
        `
    }}
`

export {
    StyledSpanIcon,
    StyledIconWrapper
}