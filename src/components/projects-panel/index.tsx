import React, { useState } from "react";
import ProjectsList from "./components/projects-list";
import Dashboard from "./components/dashboard";
import "@esri/calcite-components/dist/components/calcite-loader";
import { CalciteLoader } from "@esri/calcite-components-react";
import { Project, useGetProjectsQuery } from "../../generated/graphql.d";
import { HydratedProject } from "./types";

import { MODEL_ID } from "../../services/constants/api";

import * as Styled from "./styles";
import ProjectDetails from "./components/project-details";

const ProjectsPanel: React.FC<{}> = () => {
  const [selectedProject, setSelectedProject] =
    useState<HydratedProject | null>(null);

  let centeredContent: React.ReactNode | null = null;
  const [{ data, fetching, error }, _] = useGetProjectsQuery({
    variables: { modelId: MODEL_ID },
  });

  const projects = data?.urbanModel?.urbanDatabase?.projects
    ?.filter((project) => !!project)
    .map((project) => project as Project);
  if (fetching) {
    centeredContent = <CalciteLoader label="Projects loading" />;
  } else if (error) {
    centeredContent = <p>Error... {error.message}</p>;
  } else if (!projects) {
    centeredContent = <p>No projects found</p>;
  }

  return (
    <Styled.Wrapper>
      {centeredContent ? (
        <Styled.CenteredContent>{centeredContent}</Styled.CenteredContent>
      ) : (
        <>
          {selectedProject ? (
            <ProjectDetails
              onBackButtonClick={() => setSelectedProject(null)}
              {...selectedProject}
            />
          ) : (
            <>
              <Styled.DashboardSection>
                <Dashboard projects={projects!} />
              </Styled.DashboardSection>
              <Styled.ProjectListSection>
                <ProjectsList
                  projects={projects!}
                  onProjectSelect={(project) => setSelectedProject(project)}
                />
              </Styled.ProjectListSection>
            </>
          )}
        </>
      )}
    </Styled.Wrapper>
  );
};

export default ProjectsPanel;
