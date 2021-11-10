import React, { useContext, useState } from "react";

import {
  StyledTrainglesWrapper,
  StyledTraingles,
  StyledSkillsWrapper,
  StyledDivider,
  StyledDividerContainer,
} from "./styled";

import { DeviceContext } from "../../contexts/DeviceContext";
import { CmsContext } from "../../contexts/CmsContext";

import { useToggle } from "../../hooks/index";

import FlexContainer from "../../components/FlexContainer";
import Rating from "../../components/Rating/Rating";
import Text from "../../components/Text/Text";
import Dialog from "../../components/Dialog";
import Header from "../../components/Header/Header";


const SkillModule = () => {
  const [selectedSkill, setSelectedSkill] = useState(0);

  const { state, toggle } = useToggle();

  const {
    deviceType: { isMobile, isDesktop },
  } = useContext(DeviceContext);

  const {
    data: { skill_section },
  } = useContext(CmsContext);

  const onSkillClickHandler = (index) => {
    setSelectedSkill(index);
    toggle();
  };

  return (
    <>
      <Header
        text={skill_section.sectionName}
        wrapperStyle={
          "justify-content: center; align-items: start; margin: 2rem; flex-direction:column;"
        }
        textUndeline
      />
      <StyledSkillsWrapper isMobile={isMobile}>
        {skill_section.skills.map(
          ({ rating, name, title, level, description }, index) => (
            <FlexContainer
              isColumnDirection
              onClick={() => onSkillClickHandler(index)}
              key={name}
            >
              <Rating filled={rating} />
              <Text value={title} size={24} />
              <Text value={name} size={20} fontWeight={200} />
            </FlexContainer>
          )
        )}
        {isMobile ? null : (
          <StyledTrainglesWrapper isDesktop={isDesktop}>
            <StyledTraingles src={"/assets/svg/traingles-mini.svg"} alt="traingles-mini" />
          </StyledTrainglesWrapper>
        )}
        <Dialog
          size={isMobile ? "90%" : "50%"}
          isVisible={state}
          toggle={toggle}
        >
          <Dialog.Header>
            <span>{skill_section.skills[selectedSkill].title}</span>
            <StyledDividerContainer>
              <StyledDivider />
            </StyledDividerContainer>
          </Dialog.Header>
          <Dialog.Body>
            {skill_section.skills[selectedSkill].description}
          </Dialog.Body>
        </Dialog>
      </StyledSkillsWrapper>
    </>
  );
};

export default SkillModule;
