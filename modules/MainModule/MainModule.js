import React, { useContext, useRef } from "react";

import {
  containerPositionEnum,
  flexcontainerPositionEnum,
} from "../../const/index";

import { PageProvider } from "../../contexts/PageContext";
import { DeviceContext } from "../../contexts/DeviceContext";
import { CmsContext } from "../../contexts/CmsContext";

import { variables } from '../../const';

//modules
import HeaderModule from "../HeaderModule";
import SkillModule from "../SkillModule";
import ContactModule from "../ContactModule/ContactModule";

//components
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import AnimatedTriangles from "../../components/AnimatedTriangles/AnimatedTriangles";

import FlexContainer from "../../components/FlexContainer";
import ActionButton from "../../components/ActionButton";
import TypingText from "../../components/TypingText/TypingText";
import { useToggle } from "../../hooks/index";
import ExperienceModule from "../ExperienceModule";

const MainModule = () => {

  const sectionRefs = {
    hero: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    contact: useRef(null)
  };

  const { deviceType } = useContext(DeviceContext);
  const { data } = useContext(CmsContext);
  const { state, toggle } = useToggle();

  const optionsToTyping = data.users_permissions_user
    .user_short_descriptions_types
    .map(x => x.title);

  return (
    <PageProvider refs={sectionRefs} cmsData={data}>
      <HeaderModule hamburgerState={state} toggleHamburger={toggle} />
      <>
        <ContentContainer
          additionalStyles={"min-height: 95vh;"}
          identity={data.resume_field.main_section_translation.title}
          ref={sectionRefs.hero}
          isMobile={deviceType.isMobile}
        >
          <AnimatedTriangles isMobile={deviceType.isMobile}/>
          <div style={{ margin: "2rem" }}>
            <TypingText
              text={optionsToTyping}
              fontSize={ deviceType.isMobile ? variables.fontSizes.mobileHeaders : variables.fontSizes.headers}
            />
            <p style={{ fontSize: variables.fontSizes.normal + "px" }}>{data.users_permissions_user.biography}</p>
          </div>
          <FlexContainer
            position={flexcontainerPositionEnum.right}
            additionalStyle={"margin: 0 4rem 4rem 0"}
          >
            <ActionButton
              textColor={variables.colors.secondary}
              borderColor={variables.colors.details}
              overlayColor={variables.colors.primary}
              text={data.resume_field.main_section_translation.downloadButtonText}
              download={process.env.NEXT_PUBLIC_RESUME_FILE_NAME}
              target={"_blank"}
              href={process.env.NEXT_PUBLIC_RESUME_DOWNLOAD_PATH}
            />
          </FlexContainer>
        </ContentContainer>
        <ContentContainer
          position={containerPositionEnum.left}
          additionalStyles={"margin-top: 3rem;"}
          identity={data.skill_section.sectionName}
          ref={sectionRefs.skills}
          isMobile={deviceType.isMobile}
        >
          
          <SkillModule />
        </ContentContainer>
        <ContentContainer
          position={containerPositionEnum.left}
          identity={data.experience_section.sectionName}
          ref={sectionRefs.experience}
          isMobile={deviceType.isMobile}
        >   
          <ExperienceModule />
        </ContentContainer>
        <ContentContainer
          position={containerPositionEnum.right}
          backgroundColor={variables.colors.primary}
          additionalStyles={"min-height: 50vh;"}
          identity={data.contact_section.sectionName}
          ref={sectionRefs.contact}
          isMobile={deviceType.isMobile}
        >
          <ContactModule />
        </ContentContainer>
      </>
    </PageProvider>
  );
};

export default MainModule;
