import { useState, useEffect } from "react";

import { azureFunctionEndpoints, messages } from "../const";
import { isValidByRegex } from '../utils/helpers';

const useSendEmail = (formRef) => {
  const [isFormValid, setValidationResult] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    return () => {
      setErrorMessage(null);
      setResponse(null);
      setValidationResult(true);
    };
  }, []);

  const sendEmail = async (formValues) => {

    const baseUrl = process.env.NEXT_PUBLIC_AZURE_FUNCTION_AUTH_KEY;
    const authKey = process.env.NEXT_PUBLIC_AZURE_FUNCTION_BASE_URL;

    const path = `${baseUrl}${azureFunctionEndpoints.sendEmail}?code=${authKey}`;

    const response = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    }).catch((ex) => {
      setErrorMessage(ex.message);
      throw new Error(ex.message);
    });

    setResponse(response);
    return {
      status: response.status
    };
  };

  const isValidForm = () => {
    setErrorMessage(null);
    if (!formRef || !formRef.current) {
      setErrorMessage(messages.sendMessageBaseError);
      return;
    }
    const htmlTags = ["input", "textarea"];
    const elements = htmlTags.map((tag) => formRef.current.querySelector(tag));
    const result = elements.map((el) => ({
      isValid: validateByAttrs(el),
      name: el.name,
      value: el.value
    }));
    return result;
  };

  const validateByAttrs = (element) => {
    const validateByRequireAttr = () => {
      if (!element.required) return true;
      return element.required && (element.value || element.value === 0);
    };

    const validateByPatterAttr = () => {
      const patternExist = element.dataset && element.dataset.pattern;
      if (!patternExist) return true;
      const { value, dataset: { pattern } } = element;
      return isValidByRegex(value, pattern);
    };

    if (!validateByRequireAttr()) {
      return false;
    }
    if (!validateByPatterAttr()) {
      return false;
    }
    return true;
  };

  const tryToSendEmail = async() => {
    const validationResult = isValidForm();
      if (validationResult.some(x => !x.isValid)) {
        const invalidElements = validationResult.filter(x => !x.isValid).map(x => x.name);
        setErrorMessage(messages.invalidForm(...invalidElements));
        setValidationResult(false);
        return ({message: messages.invalidForm(...invalidElements), status: 400})
      }
      const data = validationResult.reduce((obj, result) => ({...obj,[result.name]: result.value}), {});
      return await sendEmail(data).catch((ex) => {
        setErrorMessage(ex.message);
        setValidationResult(false);
        return ({message: ex.message, status: 400})
      });
  };

  const clearForm = () => {
    const htmlTags = ["input", "textarea"];
    const elements = htmlTags.map((tag) => formRef.current.querySelector(tag));
    elements.map((element) => element.value = "");
  }

  return { isFormValid, errorMessage, response, tryToSendEmail, clearForm };
};

export default useSendEmail;
