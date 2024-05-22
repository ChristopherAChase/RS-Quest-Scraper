//@ts-ignore
import React from "react";
import QuestOverviewRow from "./QuestOverviewRow";
import RequirementsRow from "./RequirementsRow/RequirementsRow";
import { Quest } from "../../../../@types";

type QuestRowsProps = { rowData: Quest; onToggle: () => void; expanded: boolean };

const QuestRows = ({ rowData, onToggle, expanded }: QuestRowsProps) => {
  const { skillRequirements, questRequirements } = rowData;

  return (
    <>
      <QuestOverviewRow rowData={rowData} onToggle={onToggle} expanded={expanded} />
      <RequirementsRow
        questRequirements={questRequirements}
        skillRequirements={skillRequirements}
        expanded={expanded}
      />
    </>
  );
};

export default QuestRows;
