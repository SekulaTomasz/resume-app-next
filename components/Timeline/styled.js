import styled from "styled-components";
import appearanceVariables from "../../configs/appearanceVariables.json";


const StyledCenterElement = styled.div`
  grid-row-start: 1;
  display: flex;
  justify-content: center;
  ${({ rowCount }) => (rowCount ? `grid-row-end:${rowCount + 1};` : ``)}
`;

const StyledContent = styled.div``;

const StyledHeader = styled.span`
  align-items: center;
  justify-self: end;
  display: flex;
  font-size: ${appearanceVariables.fontSizes.normal}px;
`;

const StyledTimelineDivider = styled.div`
  background-color: white;
  width: 1px;
`;

const StyledSubHeader = styled.span`
  align-items: center;
  justify-self: end;
  display: flex;
  font-size: ${appearanceVariables.fontSizes.normal}px;

  ${({ isLeft, isRight }) => {
    const style = isLeft ? `justify-content: end;` : "";
    return `
      ${style}
    &:before {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        border: 2px solid ${appearanceVariables.colors.details};
        background-color: ${appearanceVariables.colors.secondary};
        border-radius: 100%;
        z-index: 5;
        ${isLeft ? "right: calc(-2rem - 13px);" : ""}
        ${isRight ? "left: calc(-2rem - 13px);" : ""}`;
  }}
`;

const StyledItalic = styled.span`
  margin-bottom: 1rem;
  font-style: italic;
  font-weight: 100;
`;

const StyledHeaderWrapper = styled.div`
  margin: 1rem 0 1rem 0;
`;

const StyledTimelineElement = styled.div`
  ${({ isLeft, isRight }) => {
    if (isLeft)
      return `grid-column-start: 1;
      grid-column-end: 1;
      text-align: end;
      position: relative;
      padding: 1rem;
      width: 70%;
      justify-self: end;`;

    if (isRight)
      return `position: relative;
      grid-column-start: 3;
      grid-column-end: 4;
      padding: 1rem;
      width: 70%;`;
    return "";
  }}

  ${StyledHeader} {
    ${({ isLeft, isRight }) => {

      const style = isLeft ? `justify-content: end;` : "";
      return `
      ${style}
      &:before {
          content: "";
          position: absolute;
          width: 24px;
          height: 24px;
          border: 2px solid ${appearanceVariables.colors.details};
          background-color: ${appearanceVariables.colors.secondary};
          border-radius: 100%;
          z-index: 5;
          ${isLeft ? "right: calc(-2rem - 19px);" : ""}
          ${isRight ? "left: calc(-2rem - 19px);" : ""}
          `;
    }}
  }
`;


const StyledTimelineWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 10px 1fr;
  grid-auto-flow: column;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  margin: 2rem;
  width: calc(100% - 4rem);

  ${StyledTimelineElement} {
    ${({isMobile}) => isMobile ? "width: 100%": ""}
  }
`;


export {
  StyledTimelineWrapper,
  StyledTimelineElement,
  StyledContent,
  StyledHeader,
  StyledSubHeader,
  StyledCenterElement,
  StyledTimelineDivider,
  StyledItalic,
  StyledHeaderWrapper,
};
