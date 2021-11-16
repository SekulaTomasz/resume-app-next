import React, { useContext, useRef } from "react";

import {
  containerPositionEnum,
} from "../../const/index";

import { PageProvider } from "../../contexts/PageContext";
import { DeviceContext } from "../../contexts/DeviceContext";
import { CmsContext } from "../../contexts/CmsContext";

import { variables } from "../../const";

//modules
import HeaderModule from "../HeaderModule";
import SkillModule from "../SkillModule";
import ContactModule from "../ContactModule/ContactModule";

//components
import ContentContainer from "../../components/ContentContainer/ContentContainer";

import { useToggle } from "../../hooks/index";
import ExperienceModule from "../ExperienceModule";
import HeroModule from "../HeroModule";

const MainModule = () => {
  const sectionRefs = {
    hero: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    contact: useRef(null),
  };

  const { deviceType } = useContext(DeviceContext);
  const { data } = useContext(CmsContext);
  const { state, toggle } = useToggle();

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
            <HeroModule />
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
