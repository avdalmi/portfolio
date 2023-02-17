import React from "react";
import { ReactComponent as WorkIcon } from "../../media/work.svg";
import { ReactComponent as SchoolIcon } from "../../media/school.svg";
import { timelineElements } from "../../data/timelineData";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./TimelinePage.css";
import { PageTitle } from "../../styles/text";
import { useTheme } from "styled-components";
import { PageContainer } from "../../styles/containers";
import {
  TimelineLocation,
  TimelineTitle,
  TimelineDescription,
  TimelineButton,
  TimelineCompany,
} from "../../styles/timeline";

function TimeLinePage() {
  let workIconStyles = { background: "#F3EAF4" };
  // let workIconStyles = theme.body === "#fff" ? {background: "1c1c1c1"}
  let schoolIconStyles = { background: "#FAF3DD" };
  const theme = useTheme();

  return (
    <PageContainer>
      <PageTitle className="title">How I got here</PageTitle>

      <VerticalTimeline layout="1-column-right">
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName={theme.body === "#fff" ? "dateLight" : "dateDark"}
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              contentStyle={{
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "column",
              }}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <TimelineTitle>{element.title}</TimelineTitle>
              <TimelineCompany>@{element.company}</TimelineCompany>
              <TimelineLocation>{element.location}</TimelineLocation>
              {element.description.map((item) => {
                return (
                  <ul>
                    <TimelineDescription>{item}</TimelineDescription>
                  </ul>
                );
              })}

              {showButton && !isWorkIcon && (
                <TimelineButton href="/projects">
                  {element.buttonText}
                </TimelineButton>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </PageContainer>
  );
}

export default TimeLinePage;
