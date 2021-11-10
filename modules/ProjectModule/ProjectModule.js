import React, { useContext } from "react";
import { StyledProjectsWrapper } from './styled';


import { DeviceContext } from '../../contexts/DeviceContext';
import { CmsContext } from "../../contexts/CmsContext";

import logo from "/public/assets/images/project_hero_page.webp";
import Card from "../../components/Card";

const ProjectModule = () => {

  const { deviceType } = useContext(DeviceContext);
  const { data } = useContext(CmsContext);

  const renderProjectGrid = () => {
    const isProjectListEven =  data.projects.lastProjects.length % 2 === 0;

    return data.projects.lastProjects.map((proj, index) => {

      const additionalStyle = !deviceType.isMobile && (!isProjectListEven && (index === 0)) ? "grid-column-start: 1; grid-column-end: 3;" : "";

      return (<Card key={index} additionalStyle={additionalStyle}>
        <Card.Body>
          <img
            src={logo}
            alt="logo"
            style={{
              width: "100%",
              borderRadius: '10px 10px 0 0'
            }}
          />
        </Card.Body>
        <Card.Footer>
          <span>{proj.name}</span>
          <span>See more</span>
        </Card.Footer>
      </Card>)
    })
  }

  return (
      <StyledProjectsWrapper isMobile={deviceType.isMobile}>
        {renderProjectGrid()}
      </StyledProjectsWrapper>
  );
};

export default ProjectModule;
