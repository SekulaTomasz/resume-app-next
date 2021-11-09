import styled, { css } from "styled-components";
import appearanceVariables from "../../configs/appearanceVariables.json";

const SharedDialogStyles = css`
  color: ${appearanceVariables.colors.secondary};
  font-weight: 300;
`;

const StyledMainDialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  height: 100vh;
  visibility:hidden;
  opacity:0;

  transition:visibility .3s linear, opacity .3s linear;

  ${({displayData}) => displayData ? "visibility:visible; opacity: 1;": "visibility:hidden; opacity: 0;"}
`;

const StyledDialogWrapperOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${appearanceVariables.colors.secondary};
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledDialogContainer = styled.div`
  width: 100%;
  box-shadow: rgba(255, 195, 0, 0.8) 0px 3px 8px;
  border-radius: 10px;
  background-color: ${appearanceVariables.colors.details};
  padding: 1rem;
`;

const StyledDialogBody = styled.div`
  ${SharedDialogStyles}
  min-height: 10rem;
`;

const StyledDialogFooter = styled.div`
  ${SharedDialogStyles}
`;

const StyledDialogHeader = styled.div`
  ${SharedDialogStyles}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 5rem;
  font-size: ${appearanceVariables.fontSizes.subHeader}px;
`;

const StyledDialogWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 101;


  ${StyledMainDialogContainer} {
    ${({ size }) => `width: ${size};`}
    
  }

`;

export {
  StyledDialogWrapper,
  StyledDialogWrapperOverlay,
  StyledDialogBody,
  StyledDialogFooter,
  StyledMainDialogContainer,
  StyledDialogHeader,
  StyledDialogContainer,
};
