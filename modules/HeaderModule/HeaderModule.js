import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  StyledHeaderWrapper,
  StyledLogoWrapper,
  StyledOptionsWrapper,
  StyledHeaderOptionText,
  StyledGithubLogo,
  StyledLogo,
  StyledHeaderLogoText,
  StyledMainHeaderWrapper,
  StyledHamburgerWrapper,
} from "./styled";

import { PageContext } from "../../contexts/PageContext";
import { DeviceContext } from "../../contexts/DeviceContext";
import { CmsContext } from "../../contexts/CmsContext";

import HamburgerMenu from "../../components/HamburgerMenu";

const HeaderModule = ({ hamburgerState = false, toggleHamburger }) => {

  const { currentPageIndex, setPageIndex, scrollPosition } =
    useContext(PageContext);
    
  const {
    deviceType: { isMobile },
  } = useContext(DeviceContext);

  const { data } = useContext(CmsContext);
  const options = [data.skill_section.sectionName, 
    data.experience_section.sectionName, 
    data.contact_section.sectionName];

  const [headerVisible, setHeaderVisible] = useState(false);
  const headerWrapperRef = useRef(null);

  useEffect(() => {
    const headerWrapperHeight = headerWrapperRef.current.offsetHeight;
    if (scrollPosition <= headerWrapperHeight) setHeaderVisible(true);
    else setHeaderVisible(false);
  }, [scrollPosition]);

  const renderHeaderOptions = useMemo(() => {  
    return options.map((x, index) => {
      const shouldBeVisible = currentPageIndex === index+1;
      return (
        <StyledHeaderOptionText
          key={x}
          isSelected={shouldBeVisible}
          onClick={() => setPageIndex(index + 1)}
        >
          {x}
        </StyledHeaderOptionText>
      )
    })
  },[currentPageIndex])

  

  return (
    <StyledMainHeaderWrapper
      ref={headerWrapperRef}
      headerVisible={headerVisible}
    >
      {!isMobile ? (
        <StyledHeaderWrapper>
          <StyledLogoWrapper>
            <StyledLogo
              onClick={() => {
                setPageIndex(0);
              }}
            />
            <StyledHeaderLogoText>
              {data.resume_header.title.split(" ").map((x, index) => (
                <span key={index}>{x}</span>
              ))}
            </StyledHeaderLogoText>
          </StyledLogoWrapper>

          <StyledOptionsWrapper>
            {renderHeaderOptions}
          </StyledOptionsWrapper>
          <a
            href={`${data.resume_header.githubUrl}`}
            target={"_blank"}
            rel={"noreferrer"}
          >
            <StyledGithubLogo />
          </a>
        </StyledHeaderWrapper>
      ) : (
        <StyledHamburgerWrapper>
          <StyledLogo
            onClick={() => {
              setPageIndex(0);
            }}
          />
          <HamburgerMenu
            isOpen={hamburgerState}
            toggle={toggleHamburger}
            setPageIndex={setPageIndex}
            currentPageIndex={currentPageIndex}
            options={options}
            resumeData={data.resume_header}
          />
        </StyledHamburgerWrapper>
      )}
    </StyledMainHeaderWrapper>
  );
};

export default HeaderModule;
