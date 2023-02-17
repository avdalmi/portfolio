import React from "react";

import { projectData } from "../../data/projectData";
import { PageContainer } from "../../styles/containers";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { useParams } from "react-router-dom";

function ProjectPage() {
  const { id } = useParams();

  const findPage = projectData.find((project) => project.id === parseInt(id));

  return (
    <PageContainer>
      <ProjectCard project={findPage} />
    </PageContainer>
  );
}

export default ProjectPage;
