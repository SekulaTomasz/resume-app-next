import React from "react";
import {
  StyledMenuWrapper,
  StyledMenuContentWrapper,
  StyledMenuOption,
  StyledMenuFooter,
  StyledGithubLogo,
  StyledTriangles,
  StyledMenuOverlay
} from "./styled";



import { useHideBodyScroll } from '../../hooks/index';

import HamburgerIcon from "../HamburgerIcon";

const HamburgerMenu = (props) => {
  const { isOpen, toggle, setPageIndex,resumeData } = props;

  useHideBodyScroll(isOpen);

  return (
    <>
      <HamburgerIcon {...props} />
      {isOpen ? (
        <>
        <StyledMenuOverlay />
        <StyledMenuWrapper isOpen={isOpen}>
          <StyledMenuContentWrapper>
          <StyledTriangles />
            {props.options.map((opt, index) => {
              return (
                <StyledMenuOption
                  key={opt}
                  onClick={() => {
                    setPageIndex(index + 1);
                    toggle();
                  }}
                >
                  {opt}
                </StyledMenuOption>
              );
            })}         
          </StyledMenuContentWrapper>
          <StyledMenuFooter>
          <a
            href={`${resumeData.githubUrl}`}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <StyledGithubLogo />
          </a>
          </StyledMenuFooter>
        </StyledMenuWrapper>
        </>
      ) : null}
    </>
  );
};

export default HamburgerMenu;
