import styled from "styled-components";
import appearanceVariables from '../../configs/appearanceVariables.json';

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
    border: 3px solid ${appearanceVariables.colors.primary};
    cursor: pointer;

    
    ${({isActive}) => {
        let styles = `background-color: ${appearanceVariables.colors.secondary};`;
        if(isActive) styles = `transform: scale(1.2); background-color: ${appearanceVariables.colors.primary};`
        return styles;
    }}

    transition: all .4s ease-in-out;

    &:hover  {
        transform: scale(1.2);
        border: 3px solid ${appearanceVariables.colors.primary};
    }

`
const StyledLine = styled.div`
    border: 2px solid ${appearanceVariables.colors.details};
    height: 10%;
    max-height: 100px;
`

export {
    StyledWrapper,
    StyledPageCircle,
    StyledLine
}
