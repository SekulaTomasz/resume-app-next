import React from "react";
import {
  StyledMenuWrapper,
  StyledMenuContentWrapper,
  StyledMenuOption,
  StyledMenuFooter,
  StyledGithubLogo,
  StyledTriangles
} from "./styled";



import { useHideBodyScroll } from '../../hooks/index';

import HamburgerIcon from "../HamburgerIcon";

const HamburgerMenu = (props) => {
  const { isOpen, toggle, setPageIndex } = props;

  useHideBodyScroll(isOpen);

  return (
    <>
      <HamburgerIcon {...props} />
      {isOpen ? (
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
            <StyledGithubLogo />
          </StyledMenuFooter>
        </StyledMenuWrapper>
      ) : null}
    </>
  );
};

export default HamburgerMenu;
