import styled from 'styled-components';
import { variables } from '../../const';

const StyledHeader = styled.span`
    color: ${({textColor}) => textColor ? textColor : variables.colors.details};
    font-size: ${variables.fontSizes.headers}px;
    font-weight: bold;
    letter-spacing: 3px;
`
const StyledUnderline = styled.div`
    width:85%;
    border: 1px solid ${({textUnderlineColor}) => textUnderlineColor ? textUnderlineColor : variables.colors.primary};
    margin-top:1rem;
`

const StyledWrapper = styled.div`
    display: flex;
    ${({wrapperStyle}) => wrapperStyle}
`

export {
    StyledWrapper,
    StyledHeader,
    StyledUnderline
}