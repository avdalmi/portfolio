import React from "react";
import {
  ProjectDate,
  ProjectDescription,
  ProjectLocation,
  ProjectSubtitle,
  ProjectTitle,
} from "../../styles/text";
import { ProjectButtons, ProjectButtonsContainer } from "../../styles/buttons";
import { ProjectContainer } from "../../styles/containers";
import ProjectIcons from "../ProjectIcons/ProjectIcons";

function ProjectCard(project) {
  const {
    id,
    title,
    stack,
    location,
    backendLink,
    date,
    description,
    frontendLink,
    tech,
  } = project.project;

  return (
    <ProjectContainer key={id}>
      <div>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectSubtitle>{stack}</ProjectSubtitle>
        <ProjectLocation>{location}</ProjectLocation>
        <ProjectDate>{date}</ProjectDate>

        <ProjectIcons tech={tech} />

        <ProjectDescription>{description}</ProjectDescription>

        {id === 1 ? (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/edb6W06X9AM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/edb6W06X9AM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}

        <ProjectButtonsContainer>
          <a href={frontendLink} target="_blank" rel="noreferrer">
            <ProjectButtons>Frontend Repository</ProjectButtons>
          </a>
          <a href={backendLink} target="_blank" rel="noreferrer">
            <ProjectButtons>Backend Repository</ProjectButtons>
          </a>
        </ProjectButtonsContainer>
      </div>
    </ProjectContainer>
  );
}

export default ProjectCard;
