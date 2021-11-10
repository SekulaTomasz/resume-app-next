import styled from "styled-components";
import { variables } from '../../const';


const StyledTrainglesWrapper = styled.div`
    justify-self: center;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({isDesktop}) => isDesktop ? `transform: scale(0.65)` : ``}
`

const StyledTraingles = styled.img`
    position: absolute;
    top: 0;
`

const StyledSkillsWrapper = styled.div`
    display: grid;
    grid-template-rows: auto;
    margin: 3rem 3rem 3rem 10%;
    column-gap: 4em;
    row-gap: 1rem;

    ${({isMobile}) => {
        if(isMobile) return `grid-template-columns: .5fr .5fr; grid-auto-flow: row;`;
        return `grid-template-columns: .5fr .5fr .5fr .5fr; grid-auto-flow: column; padding: 2rem;`
    }}

    ${StyledTrainglesWrapper} {
        ${({isMobile}) => isMobile ? "" : "grid-area: 2 / 3 / 5 / 5;"}
    }

`

const StyledDivider = styled.div`
    width: 80%;
    height: 1px;
    background-color: ${variables.colors.secondary};
    margin: 10px;

`

const StyledDividerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export {
    StyledSkillsWrapper,
    StyledTraingles,
    StyledTrainglesWrapper,
    StyledDivider,
    StyledDividerContainer
}