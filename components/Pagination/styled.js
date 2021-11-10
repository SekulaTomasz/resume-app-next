import styled from "styled-components";
import { variables } from '../../const';

const StyledWrapper = styled.div`
    min-width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const StyledPageCircle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid ${variables.colors.primary};
    cursor: pointer;

    
    ${({isActive}) => {
        let styles = `background-color: ${variables.colors.secondary};`;
        if(isActive) styles = `transform: scale(1.2); background-color: ${variables.colors.primary};`
        return styles;
    }}

    transition: all .4s ease-in-out;

    &:hover  {
        transform: scale(1.2);
        border: 3px solid ${variables.colors.primary};
    }

`
const StyledLine = styled.div`
    border: 2px solid ${variables.colors.details};
    height: 10%;
    max-height: 100px;
`

export {
    StyledWrapper,
    StyledPageCircle,
    StyledLine
}
