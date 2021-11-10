import styled from "styled-components";
import { variables } from '../../const';


const StyledCircle = styled.div`
    width: 24px;
    height: 24px;
    border-radius:50%;
    margin: .3rem;
    ${({isFilled}) => isFilled ? `background-color: ${variables.colors.primary};`: `background-color: ${variables.colors.details};`}
`

export {
    StyledCircle
}