import styled from "styled-components";
import { variables } from '../../const';
import { containerPositionEnum } from '../../const/index';

const StyledWrapper = styled.section`
    display: flex;
    flex-grow: 0;
    justify-content: ${({position}) => position === containerPositionEnum.left ? 'flex-end' : 'flex-start'};
    ${({additionalStyles}) => additionalStyles}
`
const StyleContainer = styled.div`
    background-color: ${({backgroundColor}) => backgroundColor ?? variables.colors.secondary};
    ${({isMobile}) => !isMobile ? "width: 85%;" : "width: 100%;"}
    display: grid;
`

export {
    StyledWrapper,
    StyleContainer
}