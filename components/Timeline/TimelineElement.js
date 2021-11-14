import React from "react";

import {
  StyledTimelineElement,
  StyledHeader,
  StyledSubHeader,
  StyledContent,
  StyledItalic,
  StyledHeaderWrapper,
} from "./styled";

const TimelineElement = ({ experience, position, isMobile}) => {
  if (position === "left")
    return (
      <>
        <StyledTimelineElement key={experience.companyName} isLeft isMobile={isMobile}>
          <StyledHeaderWrapper>
            <StyledHeader>{experience.companyName}</StyledHeader>
            <StyledItalic>{experience.dateSubHeader}</StyledItalic>
          </StyledHeaderWrapper>

          {experience.positions.map(({ position, duties }, index) => (
            <React.Fragment key={index}>
              <StyledSubHeader isLeft isMobile={isMobile}>{position}</StyledSubHeader>
              <StyledContent>{duties}</StyledContent>
            </React.Fragment>
          ))}
        </StyledTimelineElement>
        {isMobile ? null : <StyledTimelineElement isRight></StyledTimelineElement>}
        
      </>
    );

  return (
    <>
      {isMobile ? null : <StyledTimelineElement isLeft></StyledTimelineElement>}
      <StyledTimelineElement key={experience.companyName} isRight isMobile={isMobile}>
        <StyledHeaderWrapper >
            <StyledHeader>{experience.companyName}</StyledHeader>
            <StyledItalic>{experience.dateSubHeader}</StyledItalic>
          </StyledHeaderWrapper>
        {experience.positions.map(({ position, duties }, index) => (
          <React.Fragment key={index}>
            <StyledSubHeader isRight isMobile={isMobile}>{position}</StyledSubHeader>
            <StyledContent>{duties}</StyledContent>
          </React.Fragment>
        ))}
      </StyledTimelineElement>
    </>
  );
};

export default TimelineElement;
