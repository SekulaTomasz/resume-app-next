import React from "react";

import {
  StyledTimelineElement,
  StyledHeader,
  StyledSubHeader,
  StyledContent,
  StyledItalic,
  StyledHeaderWrapper,
} from "./styled";

const TimelineElement = ({ experience, position }) => {
  if (position === "left")
    return (
      <>
        <StyledTimelineElement key={experience.companyName} isLeft>
          <StyledHeaderWrapper>
            <StyledHeader>{experience.companyName}</StyledHeader>
            <StyledItalic>{experience.dateSubHeader}</StyledItalic>
          </StyledHeaderWrapper>

          {experience.positions.map(({ position, duties }, index) => (
            <React.Fragment key={index}>
              <StyledSubHeader isLeft>{position}</StyledSubHeader>
              <StyledContent>{duties}</StyledContent>
            </React.Fragment>
          ))}
        </StyledTimelineElement>
        <StyledTimelineElement isRight></StyledTimelineElement>
      </>
    );

  return (
    <>
      <StyledTimelineElement isLeft></StyledTimelineElement>
      <StyledTimelineElement key={experience.companyName} isRight>
        <StyledHeaderWrapper >
            <StyledHeader>{experience.companyName}</StyledHeader>
            <StyledItalic>{experience.dateSubHeader}</StyledItalic>
          </StyledHeaderWrapper>
        {experience.positions.map(({ position, duties }, index) => (
          <React.Fragment key={index}>
            <StyledSubHeader isRight>{position}</StyledSubHeader>
            <StyledContent>{duties}</StyledContent>
          </React.Fragment>
        ))}
      </StyledTimelineElement>
    </>
  );
};

export default TimelineElement;
