import styled from "styled-components";

const StyledSVGWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    ${({isMobile}) => isMobile ? "justify-content: center;" : "justify-content: flex-end;"}
`

export {
    StyledSVGWrapper
}