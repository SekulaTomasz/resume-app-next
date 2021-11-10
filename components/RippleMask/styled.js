import styled, { css } from "styled-components";
import { variables } from '../../const';
import MailSent from '/public/assets/svg/email_sent.svg';

const Shared = css`
    z-index: 1102;
    background-color: ${variables.colors.secondary};
    position: absolute;
`

const StyledSource = styled.div`
    ${Shared}
    opacity:0;
    width: 1px;
    height:1px;
    bottom: 0;
    right: 0;
    left: auto;
`
const StyledTarget = styled.div`
    ${Shared}
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
`

const StyledContentWrapper = styled.div`
    position: fixed;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const StyledMailSentSVG = styled(MailSent)`
    margin: 2rem;
`

const StyledRippleWrapper = styled.div``

export {
    StyledSource,
    StyledTarget,
    StyledRippleWrapper,
    StyledContentWrapper,
    StyledMailSentSVG
}