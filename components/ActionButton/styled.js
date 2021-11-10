import styled from "styled-components";
import { variables } from '../../const';


const StyledButton = styled.a`
  
  display: inline-block;
  flex-shrink: 0;
  text-decoration: none;
  padding: 10px 25px;
  border: none;
  color: ${({textColor}) => textColor};
  font-size: ${variables.fontSizes.small}px;
  font-weight: 600;
  position: relative;
  background: none;
  z-index: 1;
  cursor: pointer;
  user-select: none;
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  :before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 8px;
    left: 8px;
    background-color: ${({overlayColor}) => overlayColor};
    z-index: -1;
    transition: transform 0.3s ease-out 0s;
  }

  :after {
    content: "";
    left: 0px;
    top: 0px;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid ${({borderColor}) => borderColor};
    opacity: 1;
    transition: transform 0.3s ease-out 0s;
  }

  :hover::before {
    transform: translate(-16px, -16px);
  }
`;

export { StyledButton };
