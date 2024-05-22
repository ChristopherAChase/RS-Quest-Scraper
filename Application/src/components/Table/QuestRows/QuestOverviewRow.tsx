//@ts-ignore
import React from 'react'
import { Quest } from "../../../../@types";

const QuestOverviewRow = ({
  rowData,
  onToggle,
  expanded,
}: {
  rowData: Quest;
  onToggle: () => void;
  expanded: boolean;
}) => {
  const { name, questUrl, members, difficulty, length, questPoints } = rowData;

  return (
    <tr className={`questData_main`} onClick={onToggle}>
      <td>
        <span className={`accordion-indicator ${expanded ? "expanded" : ""}`}></span>
        <a href={questUrl} target="_blank">
          {name}
        </a>
      </td>
      <td>{difficulty}</td>
      <td>{length}</td>
      <td>{questPoints}</td>
      <td>{members}</td>
    </tr>
  );
};

export default QuestOverviewRow;
