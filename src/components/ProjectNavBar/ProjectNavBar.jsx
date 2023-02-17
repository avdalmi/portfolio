import React from "react";
import { projectData } from "../../data/projectData";
import {
  ProjectNavBarContainer,
  ProjectNavBarTitle,
  ProjectNavBarLinks,
  ProjectNavBarItemContainer,
  ProjectNavBarStack,
  ProjectNavBarLocation,
} from "../../styles/NavBar";

function ProjectNavBar() {
  return (
    <ProjectNavBarContainer>
      {projectData.map((project) => {
        return (
          <ProjectNavBarItemContainer key={project.id}>
            <ProjectNavBarLinks href={`/projects/${project.id}`}>
              <ProjectNavBarTitle>{project.title}</ProjectNavBarTitle>
            </ProjectNavBarLinks>
            <ProjectNavBarStack>{project.stack}</ProjectNavBarStack>
            <ProjectNavBarLocation>{project.location}</ProjectNavBarLocation>
          </ProjectNavBarItemContainer>
        );
      })}
    </ProjectNavBarContainer>
  );
}

export default ProjectNavBar;
