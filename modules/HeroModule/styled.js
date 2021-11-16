import styled from "styled-components";
import { variables } from "../../const";


const StyledHeroContainer = styled.div`
    display: grid;
    grid-template-rows: 80% 20%;
    
`

const StyledBioSpan = styled.span`
    font-size: ${variables.fontSizes.normal}px;
`
const StyledBioWrapper = styled.div`
    margin: 1rem;
`

const StyledHeroWrapper = styled.div`
    ${StyledHeroContainer}{
        ${({isJustMobile}) => isJustMobile ? "height: calc(calc(var(--vh, 1vh) * 100) - 6.5rem)" : ""}
    }
    
`

export {
    StyledHeroWrapper,
    StyledHeroContainer,
    StyledBioSpan,
    StyledBioWrapper
}