import styled from "styled-components";


const StyledContainer = styled.div`
    display: flex;
    cursor: pointer;
    ${({position}) => `justify-content: ${position}}`}
    ${({isColumnDirection}) => isColumnDirection ? 'flex-direction: column;': 'flex-direction: row;'}
    ${({additionalStyle}) => additionalStyle}
`;

export {
    StyledContainer
};