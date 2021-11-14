import React, { useEffect, useRef, useState, useContext } from "react";
import {
  StyledContactModuleWrapper,
  StyledButtonWrapper,
  StyleValidationResultListElements,
  StyledValidationResultList,
} from "./styled";

import { DeviceContext } from "../../contexts/DeviceContext";
import { CmsContext } from "../../contexts/CmsContext";

import { useSendEmail, useRipple, useHideBodyScroll } from "../../hooks";

import Form from "../../components/Form/Form";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea/Textarea";
import ActionButton from "../../components/ActionButton";
import Header from "../../components/Header/Header";

import { patterns } from "../../const";
import { variables } from '../../const';
import RippleMask from "../../components/RippleMask/RippleMask";

const ContactModule = () => {

  const {
    deviceType: { isMobile },
  } = useContext(DeviceContext);

  const { data } = useContext(CmsContext);

  const wrapper = useRef(null);
  const formRef = useRef(null);
  const rippleWrapperRef = useRef(null);

  const [isFormActive, setFormActive] = useState(false);

  const { toggleRippleHandler, shouldContentDisplay } = useRipple(rippleWrapperRef,true,1000);
  const { isFormValid, tryToSendEmail, errorMessage,clearForm } = useSendEmail(formRef, toggleRippleHandler);
  
  
  useHideBodyScroll(shouldContentDisplay);

  useEffect(() => {
    if (isFormActive) {
      setTimeout(() => {
        wrapper.current.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [isFormActive]);


  const submitFormHandler = async() => {
    const result = await tryToSendEmail();
    if(result.status === 400) return;
    toggleRippleHandler(true);
    clearForm();
  }

  return (
    <>
      <Header
        text={data.contact_section.sectionName}
        wrapperStyle={`justify-content: center; align-items: center; flex-direction: column;`}
        textColor={variables.colors.secondary}
        textUndeline
        textUnderlineColor={variables.colors.secondary}
        isMobile={isMobile}
      />
      <StyledContactModuleWrapper ref={wrapper} isMobile={isMobile}>
        <Form isMobile={isMobile} ref={formRef}>
          {!isFormValid ? (
            <StyledValidationResultList>
              <StyleValidationResultListElements>
                {errorMessage}
              </StyleValidationResultListElements>
            </StyledValidationResultList>
          ) : null}
          <Input
            label={data.resume_field.contact_form_translation.emailInputLabel}
            name={"email"}
            pattern={patterns.emailPattern}
          />
          <Textarea
            label={data.resume_field.contact_form_translation.contentText}
            onFocus={() => setFormActive((prev) => !prev)}
            name={"message"}
          />
        </Form>
        <StyledButtonWrapper>
          <ActionButton
            textColor={variables.colors.secondary}
            borderColor={variables.colors.secondary}
            overlayColor={variables.colors.details}
            text={data.resume_field.contact_form_translation.buttonText}
            onClick={submitFormHandler}
          />
          <RippleMask ref={rippleWrapperRef} toggleRipple={toggleRippleHandler} shouldContentDisplay={shouldContentDisplay}>test</RippleMask>
        </StyledButtonWrapper>
        
      </StyledContactModuleWrapper>
    </>
  );
};

export default ContactModule;
