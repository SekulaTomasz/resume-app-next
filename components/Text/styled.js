import styled from "styled-components";
import { variables } from '../../const';


const StyledText = styled.span`
    text-align: right;
    transition: opacity 0.3s ease, max-height 0.3s ease;
    ${({size}) => `font-size: ${!size ? variables.fontSizes.tiny : size}px;`};
    ${({isInitialTransform}) => isInitialTransform ? 'text-transform: initial;' : 'text-transform: lowercase;'}
    ${({fontWeight}) => `font-weight: ${fontWeight};`}
    ${({isVisible}) => isVisible ? "opacity: 1; max-height: 500px;": "opacity: 0; max-height: 0px; visibility: hidden;"}
    ${({additionalStyle}) => additionalStyle}
    
`

export {
    StyledText
}