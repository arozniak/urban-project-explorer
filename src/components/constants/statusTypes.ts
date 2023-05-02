import { ProjectStatusColor } from "./colors";
import completeIcon from "../../img/project-construction-complete-purple.png";
import approvedIcon from "../../img/project-approved-green.png";
import underConstructionIcon from "../../img/project-under-construction2-red.png";
import prefileIcon from "../../img/project-prefile-blue.png";

export enum StatusType {
  None = "None",
  ConstructionComplete = "ProjectConstructionCompletePurple",
  UnderConstruction = "ProjectUnderConstructionRed",
  Approved = "ProjectApprovedGreen",
}

export const statusTypeDetails: {
  [key: string]: {
    displayName: string;
    color: ProjectStatusColor;
    icon: string;
  };
} = {
  [StatusType.None]: {
    displayName: "All",
    color: ProjectStatusColor.Blue,
    icon: prefileIcon,
  },
  [StatusType.ConstructionComplete]: {
    displayName: "Complete",
    color: ProjectStatusColor.Purple,
    icon: completeIcon,
  },
  [StatusType.UnderConstruction]: {
    displayName: "Under Construction",
    color: ProjectStatusColor.Red,
    icon: underConstructionIcon,
  },
  [StatusType.Approved]: {
    displayName: "Approved",
    color: ProjectStatusColor.Green,
    icon: approvedIcon,
  },
};
