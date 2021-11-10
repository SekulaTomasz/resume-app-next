import styled from "styled-components";
import { variables } from '../../const';

const StyledFormWrapper = styled.div`
    display: flex;    
    flex-direction: column;
    ${({isMobile}) => isMobile ? "width: 100%;" : "width: 50%;"}

`

const StyledMainFormContainer = styled.div`
    padding: 2rem;
    background-color: ${variables.colors.details};
    border-radius: 10px;
`

export {
    StyledFormWrapper,
    StyledMainFormContainer
}