import React from "react";
import useTypingText from "../../hooks/useTypingText";

import { StyledCursor, StyledText, StyledWrapper } from "./styled";

const TypingText = ({ text, fontSize }) => {

  const { word } = useTypingText(text, 100, true, 1000);

  return (
    <StyledWrapper fontSize={fontSize}>
      <StyledText>
        {word.split("").map((char) => {
          if (char === "|") return <StyledCursor key={char}>{char}</StyledCursor>;
          return char;
        })}
      </StyledText>
    </StyledWrapper>
  );
};

export default TypingText;
