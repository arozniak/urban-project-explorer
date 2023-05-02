import { ProjectAttributes } from "../../generated/graphql";

export interface HydratedProject {
  attributes: ProjectAttributes;
  statusType: string;
  neighborhood: string;
}
