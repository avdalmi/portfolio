import React from "react";
import { TechIconContainer } from "../../styles/containers";
import { TechIconOverlay, TechIconText } from "../../styles/Images";

function ProjectIcons(project) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {project.tech.map((tech, index) => {
        return (
          <TechIconContainer key={index}>
            <img
              src={tech.imageUrl}
              alt={tech.name}
              style={{
                display: "block",
                width: "100%",
                height: "auto",
              }}
            />

            <a href={tech.webUrl} target="_blank" rel="noreferrer">
              <TechIconOverlay>
                <TechIconText>{tech.name}</TechIconText>
              </TechIconOverlay>
            </a>
          </TechIconContainer>
        );
      })}
    </div>
  );
}

export default ProjectIcons;
