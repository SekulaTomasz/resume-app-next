import styled from "styled-components";
import appearanceVariables from '../../configs/appearanceVariables.json';
import { ContainerPositionEnum } from '../../const/index';

const StyledWrapper = styled.section`
    display: flex;
    flex-grow: 0;
    justify-content: ${({position}) => position === ContainerPositionEnum.left ? 'flex-end' : 'flex-start'};
    ${({additionalStyles}) => additionalStyles}
`
const StyleContainer = styled.div`
    background-color: ${({backgroundColor}) => backgroundColor ?? appearanceVariables.colors.secondary};
    ${({isMobile}) => !isMobile ? "width: 85%;" : "width: 100%;"}
    display: grid;
`

export {
    StyledWrapper,
    StyleContainer
}