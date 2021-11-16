import React, { useContext } from "react";
import {
  StyledHeroContainer,
  StyledHeroWrapper,
  StyledBioWrapper,
  StyledBioSpan
} from "./styled";

import { flexcontainerPositionEnum } from "../../const/index";

import { DeviceContext } from "../../contexts/DeviceContext";
import { CmsContext } from "../../contexts/CmsContext";

import { variables } from "../../const";

import AnimatedTriangles from "../../components/AnimatedTriangles/AnimatedTriangles";

import FlexContainer from "../../components/FlexContainer";
import ActionButton from "../../components/ActionButton";
import TypingText from "../../components/TypingText/TypingText";

export const HeroModule = () => {
  const {
    deviceType: { isMobile, isJustMobile },
  } = useContext(DeviceContext);
  const { data } = useContext(CmsContext);

  const optionsToTyping =
    data.users_permissions_user.user_short_descriptions_types.map(
      (x) => x.title
    );

  return (
    <>
      <StyledHeroWrapper isJustMobile={isJustMobile} >
        <StyledHeroContainer>
          <AnimatedTriangles isMobile={isMobile} />
          <TypingText
            text={optionsToTyping}
            fontSize={
              isMobile
                ? variables.fontSizes.mobileHeaders
                : variables.fontSizes.headers
            }
          />
        </StyledHeroContainer>
        <StyledBioWrapper>
            <StyledBioSpan>
          {data.users_permissions_user.biography}
          </StyledBioSpan>
        </StyledBioWrapper>
      </StyledHeroWrapper>
      <FlexContainer
        position={flexcontainerPositionEnum.right}
        additionalStyle={!isJustMobile ? "margin: 0 4rem 4rem 0" : "margin: 0 2rem 2rem 0"}
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
    </>
  );
};

export default HeroModule;
