import styled from 'styled-components';

import appearanceVariables from '../../configs/appearanceVariables.json';

const StyledCardWrapper = styled.div`
    border-radius: 10px;
    ${({additionalStyle}) => additionalStyle}
    background-color: ${appearanceVariables.colors.details};
`

const StyledCardBody = styled.div`
    border-radius: 10px;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
`

const StyledCardFooter = styled.div`
    font-size: ${appearanceVariables.fontSizes.normal}px;
    color: ${appearanceVariables.colors.secondary};
    font-weight: 500;
    display: flex;
    align-items:center;
    justify-content: space-between;
    min-height: 3rem;
    padding: 1rem;
`
export {
    StyledCardWrapper,
    StyledCardBody,
    StyledCardFooter
}