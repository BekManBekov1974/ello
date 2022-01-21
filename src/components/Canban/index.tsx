import { useEffect, useState } from "react";
import { Button } from "..";
import { colors } from "../../constants/colors";
import { ITask } from "../../interfaces";
import { Iconly } from "../Iconly";
import { CanbanCard } from "./CanbanCard";
import { useStyles } from "./hooks/useStyles";

interface ICanbanProps {
  title: string;
  tasks: { [key: string]: ITask };
  onNewClick: () => {} | void;
}

export const Canban: React.FC<ICanbanProps> = ({
  title,
  tasks,
  onNewClick,
}) => {
  const styles = useStyles();
  const [message, setMessage] = useState<string>("");
  const [taskCollection, setTaskCollection] =
    useState<{ [key: string]: ITask }>(tasks);
  useEffect(() => {
    setTaskCollection(() => tasks);
  }, [tasks]);
  return (
    <div
      className={styles.wrapper}
      onDragEnter={() => setMessage(() => "Me!")}
      onDragLeave={() => setMessage(() => "")}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className={styles.titleBar}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ textTransform: "uppercase" }}>{title}</span>
          <svg
            style={{ margin: "0 5px" }}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 10C8.53043 10 9.03914 9.78929 9.41421 9.41421C9.78929 9.03914 10 8.53043 10 8C10 7.46957 9.78929 6.96086 9.41421 6.58579C9.03914 6.21071 8.53043 6 8 6C7.46957 6 6.96086 6.21071 6.58579 6.58579C6.21071 6.96086 6 7.46957 6 8C6 8.53043 6.21071 9.03914 6.58579 9.41421C6.96086 9.78929 7.46957 10 8 10V10Z"
              fill="#B8D6F4"
            />
          </svg>
          <span>{tasks ? Object.keys(tasks).length : 0}</span>
        </div>
        <div onClick={onNewClick}>
          <Iconly name="Plus2" color={colors.lightSky} />
        </div>
      </div>
      <div className={styles.cardsWrapper}>
        {taskCollection &&
          Object.keys(taskCollection).map((task) => {
            return <CanbanCard task={taskCollection[task]} />;
          })}
      </div>
    </div>
  );
};
