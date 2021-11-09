import styled from "styled-components";
import appearanceVariables from '../../configs/appearanceVariables.json';


const StyledCircle = styled.div`
    width: 24px;
    height: 24px;
    border-radius:50%;
    margin: .3rem;
    ${({isFilled}) => isFilled ? `background-color: ${appearanceVariables.colors.primary};`: `background-color: ${appearanceVariables.colors.details};`}
`

export {
    StyledCircle
}