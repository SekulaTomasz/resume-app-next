import styled from "styled-components";
import { variables } from '../../const';


const StyledInput = styled.input`
    font-size: ${variables.fontSizes.normal}px;
    font-weight: 300;
    border-radius: 2px;
    margin: 0;
    border: none;
    width: 100%;
    transition: padding-top 0.2s ease, margin-top 0.2s ease;
    background-color: transparent;
    z-index: 2;

    :focus,
    :valid {
        outline: 0;
        padding-top: 35px;
    }
`
const StyledSpan = styled.span`
    font-weight: 600;
    margin: 0;
    position: absolute;
    color: ${variables.colors.secondary};
    font-size: ${variables.fontSizes.normal}px;
    
    top: 0px;
    left: 0;
    z-index: 1;

    -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
    transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;

    ${StyledInput}:focus + &,
    ${StyledInput}:valid + &  {
		top: 0;
        font-size: ${variables.fontSizes.small}px;
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
    border-top: 1px solid ${variables.colors.secondary};
    align-self: start;
    left: 0;
    margin: 0;
    padding: 0;
    position: relative;
    -webkit-transition: width 0.4s ease;
    transition: width 0.4s ease;

    ${StyledInput}:focus ~ &,
    ${StyledInput}:valid ~ &  {
		width: 100%;
	}
`

export {
    StyledInput,
    StyledSpan,
    StyledWrapper,
    StyledInputBorder
}