import { useEffect, useState } from "react";
import { Button } from "..";
import { ITask } from "../../interfaces";
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
      onDragEnd={() =>
        setTaskCollection(() => {
          return {
            ...taskCollection,
            ...{
              ["a" + Math.round(Math.random() * 100)]: {
                ...taskCollection["a"],
              },
            },
          };
        })
      }
    >
      <div className={styles.titleBar}>
        <span>{title + message}</span>
        <div className={styles.counter}>
          <span>{tasks.length}</span>
        </div>
      </div>
      <div className={styles.cardsWrapper}>
        {Object.keys(taskCollection).map((task) => {
          return <CanbanCard task={taskCollection[task]} />;
        })}
      </div>
      <Button outline text="" leftIcon="Plus" onClick={onNewClick} full />
    </div>
  );
};
