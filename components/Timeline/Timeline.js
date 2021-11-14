import React from "react";

import TimelineElement from "./TimelineElement";

import {
  StyledTimelineWrapper,
  StyledCenterElement,
  StyledTimelineDivider
} from "./styled";

const Timeline = ({ isMobile, data }) => {
  return (
    <StyledTimelineWrapper isMobile={isMobile}>
      <StyledCenterElement rowCount={data.length}>
          <StyledTimelineDivider />
      </StyledCenterElement>
      {data.map((experience, index) => {
        return <TimelineElement
          experience={experience}
          position={isMobile || index % 2 !== 0 ? "right" : "left"}
          key={index}
          isMobile={isMobile}
        />
      })}
    </StyledTimelineWrapper>
  );
};

export default Timeline;
