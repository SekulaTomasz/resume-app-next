import styled from "styled-components";

const StyledProjectsWrapper = styled.div`
    ${({isMobile}) => isMobile ?  "grid-template-columns: 1fr;" : "grid-template-columns: 1fr 1fr;"}
    display: grid;
    margin: 5rem;
    grid-gap: 5rem;   
`;

export { StyledProjectsWrapper };
