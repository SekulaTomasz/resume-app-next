import styled, { keyframes }  from "styled-components";

import { variables } from '../../const';

const StyledText = styled.span`
  text-transform : uppercase;
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
  width: 100%;
  ${({fontSize}) => `min-height: ${Math.round(fontSize*1.22)}px;`}
  ${StyledText} {
    ${({fontSize}) => `font-size:${fontSize}px;`}
  }
  ${StyledCursor} {
    ${({fontSize}) => `font-size:${fontSize*1.5}px;`}
  }
`


export {
    StyledCursor,
    StyledText,
    StyledWrapper
}