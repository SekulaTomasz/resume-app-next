import styled, { css } from "styled-components";

import GithubLogo from "/public/assets/svg/github-logo.svg";
import { variables } from '../../const';
import TrianglesSvg from '/public/assets/svg/traingles-mini.svg';

const CursorShared = css`
  cursor: pointer;
`;

const StyledMenuWrapper = styled.div`
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  position: absolute;
  opacity: 0;
  background-color: ${variables.colors.secondary};


  ${({ isOpen }) => {
    if (!isOpen)
      return `
            animation: hide .3s ease; animation-fill-mode: forwards; 
        `;

    return `
            animation: show .3s ease; animation-fill-mode: forwards;
        `;
  }}

  @keyframes show {
    0% {
      opacity: 0;
    }
    50% {
      z-index: 99;
    }
    100% {
      opacity: 1;
      z-index: 99;
    }
  }

  @keyframes hide {
    0% {
      opacity: 1;
    }
    50% {
      z-index: -1;
    }
    100% {
      z-index: -1;
      opacity: 0;
    }
  }
`;

const StyledMenuContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  position: relative;
`;

const StyledMenuOption = styled.span`
  margin: 2rem;
  font-size: ${variables.fontSizes.subHeader}px;
  cursor: pointer;
  user-select: none;
  ${CursorShared}
`;
const StyledMenuFooter = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
const StyledGithubLogo = styled(GithubLogo)`
  ${CursorShared}
`;

const StyledTriangles = styled(TrianglesSvg)`
  position: absolute;
  top: -40%;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  left: -30%;
  z-index: -1;
`



export {
  StyledMenuWrapper,
  StyledMenuOption,
  StyledMenuContentWrapper,
  StyledMenuFooter,
  StyledGithubLogo,
  StyledTriangles
};
