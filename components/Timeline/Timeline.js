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
          position={index % 2 === 0 ? "left" : "right"}
          key={index}
        />
      })}
    </StyledTimelineWrapper>
  );
};

export default Timeline;
