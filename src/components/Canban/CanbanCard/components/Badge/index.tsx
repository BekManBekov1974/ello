import React from "react";
import { colors } from "../../../../../constants/colors";
import { TaskPriority } from "../../../../../interfaces";
import { Iconly } from "../../../../Iconly";

interface IBadgeProps {
  text: string;
  icon: string;
  priority: TaskPriority;
}
export const Badge: React.FC<IBadgeProps> = ({ text, icon, priority }) => {
  const color = {
    [TaskPriority.Default]: {
      background: colors.defaultLight,
      color: colors.defaultText,
    },
    [TaskPriority.Minor]: {
      background: colors.minorLight,
      color: colors.minorText,
    },
    [TaskPriority.Critic]: {
      background: colors.criticHover,
      color: colors.criticText,
    },
    [TaskPriority.Serious]: {
      background: colors.seriousLight,
      color: colors.seriousText,
    },
    [TaskPriority.Emergency]: {
      background: colors.emergencyLight,
      color: colors.emergencyText,
    },
  };
  return (
    <div
      style={{
        ...color[priority],
        display: "flex",
        alignItems: "center",
        padding: `2px 4px`,
        borderRadius: 2,
        fontSize: 13,
      }}
    >
      <span>{text || "N/A"}</span>
    </div>
  );
};
