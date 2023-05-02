import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Project } from "../../../../../../generated/graphql";

import * as Styled from "./styles";
import { useAppSelector } from "../../../../../../store/hooks";
import {
  StatusType,
  statusTypeDetails,
} from "../../../../../constants/statusTypes";

interface ChartDataEntry {
  groupKey: number;
  [key: string]: number;
}

interface Props {
  projects: Project[];
}

const Chart: React.FC<Props> = ({ projects }) => {
  const filter = useAppSelector((state) => state.projectsFilter.currentFilter);

  const data = projects
    .filter(
      (project) =>
        filter === "None" || project?.statusType.attributes.Icon === filter
    )
    .reduce((acc: ChartDataEntry[], project) => {
      const groupKey = new Date(project.attributes.EndDate).getFullYear();
      const existingGroup = acc.find((group) => group.groupKey === groupKey);
      const statusType = project?.statusType?.attributes.Icon;
      if (existingGroup) {
        if (statusType in existingGroup) {
          existingGroup[statusType] += 1;
        } else {
          existingGroup[statusType] = 1;
        }
      } else {
        acc.push({ groupKey, [statusType]: 1 });
      }
      return acc;
    }, [])
    .sort((a, b) => a.groupKey - b.groupKey);

  return (
    <Styled.Wrapper>
      <ResponsiveContainer>
        <BarChart width={700} height={250} data={data}>
          <XAxis dataKey="groupKey" />
          <Tooltip />
          {Object.values(StatusType).map((statusType) => (
            <Bar
              name={statusTypeDetails[statusType].displayName}
              barSize={12}
              dataKey={statusType}
              stackId="a"
              fill={statusTypeDetails[statusType].color}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Styled.Wrapper>
  );
};

export default Chart;
