import styled from "styled-components";

import appearanceVariables from '../../configs/appearanceVariables.json';


const StyledTextarea = styled.textarea`
    font-size: ${appearanceVariables.fontSizes.normal}px;
    font-weight: 300;
    border-radius: 2px;
    margin: 0;
    border: none;
    width: 100%;
    transition: padding-top 0.2s ease, margin-top 0.2s ease, height 0.5s ease;
    background-color: transparent;
    z-index: 2;
    resize: none;
    overflow-x: hidden; 
    height: 65px;


    :focus,
    :valid {
        outline: 0;
        margin-top:${appearanceVariables.fontSizes.normal}px;
        height: 250px;
    }
` 
const StyledSpan = styled.span`
    font-weight: 600;
    margin: 0;
    position: absolute;
    color: ${appearanceVariables.colors.secondary};
    font-size: ${appearanceVariables.fontSizes.normal}px;
    top: 30px;
    left: 0;
    z-index: 1;

    -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
    transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;

    ${StyledTextarea}:focus + &,
    ${StyledTextarea}:valid + &  {
		top: 0px;
        font-size: ${appearanceVariables.fontSizes.small}px;
	}
`
const StyledWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    position: relative;
    margin: 1rem;
`
const StyledInputBorder = styled.div`
    width: 25%;
    border-top: 1px solid ${appearanceVariables.colors.secondary};
    align-self: start;
    left: 0;
    margin: 0;
    padding: 0;
    position: relative;
    -webkit-transition: width 0.4s ease;
    transition: width 0.4s ease;

    ${StyledTextarea}:focus ~ &,
    ${StyledTextarea}:valid ~ &  {
        width: 100%;
    }
`

export {
    StyledTextarea,
    StyledSpan,
    StyledWrapper,
    StyledInputBorder
}