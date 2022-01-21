import { ITask, TaskPriority } from "../../../interfaces";
import { Badge } from "./components/Badge";
import { useStyles } from "./hooks/useStyles";
import { toAbsoluteUrl } from "../../../utils/utils";
import React, { useCallback } from "react";
import { colors } from "../../../constants/colors";
import { Iconly } from "../../Iconly";
interface ICanbanCardProps {
  task: ITask;
}
export const CanbanCard: React.FC<ICanbanCardProps> = ({ task }) => {
  const styles = useStyles();
  const dragStart = useCallback((e: React.DragEvent) => {
    const element = e.target as HTMLDivElement;
    element.style.opacity = "0.01";
  }, []);
  const dragEnd = useCallback((e: React.DragEvent) => {
    const element = e.target as HTMLDivElement;
    element.style.opacity = "1";
  }, []);
  const color = {
    [TaskPriority.Critic]: colors.critic,
    [TaskPriority.Default]: colors.default,
    [TaskPriority.Emergency]: colors.emergency,
    [TaskPriority.Minor]: colors.minor,
    [TaskPriority.Serious]: colors.serious,
  };
  return (
    <div className={styles.back}>
      <div
        className={styles.wrapper}
        style={{
          border: `1px solid ${color[task.priority]}`,
          borderLeft: `5px solid ${color[task.priority]}`,
          boxShadow: `0px 4px 10px ${color[task.priority]}0F`,
        }}
        draggable={true}
        onDragStart={dragStart}
        onDragEnd={dragEnd}
      >
        <div className={styles.header}>
          <div
            className={styles.taskTitle}
            style={{ color: color[task.priority] }}
          >
            <span>{task.title}</span>
          </div>
          <Iconly
            name="Menu"
            color="black"
            size="md"
            style={{ marginLeft: 7 }}
          />
        </div>
        <div style={{ margin: "15px 0" }}>{task.content}</div>
        <div className={styles.footer}>
          <Badge text={task.deadline} priority={task.priority} icon="Clock" />
          <img
            width={28}
            src={
              task.assigne.avatar ||
              toAbsoluteUrl("/assets/images/avatarPlaceholder.png")
            }
          ></img>
        </div>
      </div>
    </div>
  );
};
