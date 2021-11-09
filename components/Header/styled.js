import styled from 'styled-components';
import appearanceVariables from '../../configs/appearanceVariables.json';

const StyledHeader = styled.span`
    color: ${({textColor}) => textColor ? textColor : appearanceVariables.colors.details};
    font-size: ${appearanceVariables.fontSizes.headers}px;
    font-weight: bold;
    letter-spacing: 3px;
`
const StyledUnderline = styled.div`
    width:85%;
    border: 1px solid ${({textUnderlineColor}) => textUnderlineColor ? textUnderlineColor : appearanceVariables.colors.primary};
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