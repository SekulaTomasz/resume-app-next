import styled, { keyframes }  from "styled-components";

import { variables } from '../../const';

const StyledText = styled.span`
  text-transform : uppercase;
  overflow-wrap: anywhere;
  line-height: 90%;
`

const blink = keyframes`
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const StyledCursor = styled.span`
  font-weight: 100;
  padding-left: 2px;
  animation: ${blink} 1s step-end infinite;
  color: ${variables.colors.primary};
`;

const StyledWrapper = styled.div`
  overflow: hidden;
  margin: 0 1rem 0 1rem;
  min-height: 160px;
  display: flex;
  align-items: center;
  ${StyledText} {
    ${({fontSize}) => `font-size:${fontSize}px;`}
  }
  ${StyledCursor} {
    ${({fontSize}) => `font-size:${fontSize*1.2}px;`}
  }
`

const StyledPrefix = styled.span`
  color: ${variables.colors.primary};
`

export {
    StyledCursor,
    StyledText,
    StyledWrapper,
    StyledPrefix
}