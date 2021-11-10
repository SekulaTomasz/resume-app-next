import styled from 'styled-components';

import { variables } from '../../const';

const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 1.5rem;
`


const StyledContactModuleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    ${StyledButtonWrapper} {
        ${({isMobile}) => isMobile ? "width: 100%" : "width: 50%;"}
    }
`

const StyledValidationResultList = styled.div`
    color: ${variables.colors.secondary};
    display: flex;
    justify-content: center;

`

const StyleValidationResultListElements = styled.span`
    color: ${variables.colors.secondary};
    font-size: ${variables.fontSizes.tiny}px;
    font-weight: 600;
`

export {
    StyledContactModuleWrapper,
    StyledButtonWrapper,
    StyledValidationResultList,
    StyleValidationResultListElements
}