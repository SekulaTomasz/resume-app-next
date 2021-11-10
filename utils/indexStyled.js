import styled from "styled-components";
import { variables } from "../const";

const StyledAppContainer = styled.div`
    background-color: ${variables.colors.secondary};
    width: 100%;
    min-height: 100vh;
    height: 100%;
`

const StyledMainModuleOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    background-color: ${variables.colors.secondary};
    width: 100%;
    height: 100%;
    opacity: 1;
    visibility: visible;

    transition: visibility 1s linear, opacity 1s linear;

    ${({toggleOverlay}) => toggleOverlay ? "visibility:hidden; opacity: 0;": "visibility:visible; opacity: 1;"}

`

export {
    StyledAppContainer,
    StyledMainModuleOverlay
}