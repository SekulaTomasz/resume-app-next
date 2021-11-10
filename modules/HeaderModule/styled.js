import styled, { css } from "styled-components";
import { variables } from '../../const';

import Logo from "/public/assets/svg/header-icon.svg";
import GithubLogo from "/public/assets/svg/github-logo.svg";

const CursorShared = css`
  cursor: pointer;
`;

const TextShared = css`
  color: ${variables.colors.details};
  text-transform: lowercase;
  font-size: ${variables.fontSizes.normal}px;
  user-select: none;
  ${CursorShared}
`;

const StyledHeaderWrapper = styled.div`
  width: 80%;
  display: flex;
  padding: 0.2rem;
  align-items: center;
  justify-content: space-between;
  height: 100%;

`;


const StyledHeaderOptionText = styled.span`
  ${TextShared}
  margin: 1rem;
  font-weight: 500;

  ${({isSelected}) => {
    if(!isSelected) return "font-weight: 100;";
  }}
`;

const StyledOptionsWrapper = styled.div`
  margin-right: 8rem;
`;

const StyledHeaderLogoText = styled.span`
    ${TextShared}
    cursor: default;
    font-weight: 600;
    letter-spacing: 3px;
    display: flex;
    flex-direction: column;
    margin-left: .5rem;

    @keyframes show {
    0% {
      display: none;
      opacity: 0;
    }
    1% {
      display: block;
    }
    100% {
      display: block;
      opacity: 1;
      visibility: none;
    }
  }

  @keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      display: none;
      opacity: 0;
    }
  }
`;

const StyledLogo = styled(Logo)`
  transition: all 0.5s ease;
  padding: .5rem;
  align-self: center;
  cursor: pointer;
  margin-left: 2rem;
`;

const StyledLogoWrapper = styled.div`
  display: grid;
  align-items: center;
  place-items: center;
  grid-template-columns: auto 1fr;
  height: 100%;
  ${CursorShared};
`;

const StyledGithubLogo = styled(GithubLogo)`
  ${CursorShared}
`;

const StyledMainHeaderWrapper = styled.div`
  position: sticky;
  z-index: 100;
  top: 0;
  background-color: ${variables.colors.secondary};
  width: 100%;
  height: 6.5rem;
  transition: box-shadow 1s;
  ${({ headerVisible }) => headerVisible ? "" : "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"}

  ${StyledHeaderLogoText} {
    ${({ headerVisible }) =>
    headerVisible
      ? "animation: show 0.4s linear; animation-fill-mode: forwards;"
      : "animation: hide 0.4s linear; animation-fill-mode: forwards;"}
  }

  ${StyledLogo} {
    ${({ headerVisible }) =>
    headerVisible
      ? ""
      : "transform:scale(1.2)"}
  }
`;

const StyledHamburgerWrapper = styled.div`
  height: 100%;
  display: flex;
`

export {
  StyledHeaderWrapper,
  StyledLogoWrapper,
  StyledOptionsWrapper,
  StyledHeaderOptionText,
  StyledHeaderLogoText,
  StyledLogo,
  StyledGithubLogo,
  StyledMainHeaderWrapper,
  StyledHamburgerWrapper
};
