import React, { useContext } from "react";
import Timeline from "../../components/Timeline/Timeline";
import { DeviceContext } from "../../contexts/DeviceContext";
import { CmsContext } from "../../contexts/CmsContext";
import Header from "../../components/Header/Header";

const ExperienceModule = () => {
  const {
    deviceType: { isMobile },
  } = useContext(DeviceContext);

  const { data: { experience_section } } = useContext(CmsContext)

  const orderedData = experience_section.experiences.sort((a,b) =>  b.order - a.order);
  
  return (
    <>
      <Header
        text={experience_section.sectionName}
        wrapperStyle={
          "justify-content: center; align-items: start; margin: 2rem; flex-direction:column;"
        }
        textUndeline
        isMobile={isMobile}
      />
      <Timeline isMobile={isMobile} data={orderedData}/>
    </>
  );
};

export default ExperienceModule;
