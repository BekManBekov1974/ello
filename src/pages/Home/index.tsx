import { useStyles } from "./hooks/useStyles";
import { Sidebar } from "../../sections/Sidebar";
import { Header } from "../../sections/Header";
import { Canban } from "../../components/Canban";
import { NewTaskDialog } from "../../sections/Dialogs/TaskDialog";
import { RichEdit } from "../../components/RichEdit";
import { ITask, TaskPriority, TaskState, TaskType } from "../../interfaces";
import { Dropdown } from "../../components/Dropdown";
import { FC, useCallback, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { IAppreducers } from "../../store/rootReducer";
import { actions as taskActions } from "../../store/reducers/taskReducer";
import { actions as authActions } from "../../store/reducers/authReducer";
import { Splash } from "../../components/SplashScreen";
import { useHistory } from "react-router-dom";
export const Home: FC<TPropsFromRedux> = ({
  taskState,
  tasks,
  fetchTasks,
  user,
  loginState,
  logout,
}) => {
  const [showNewTaskDialog, setShowNewTaskDialog] = useState<boolean>(false);
  const styles = useStyles();
  useEffect(() => {
    fetchTasks();
  }, []);
  useEffect(() => {
    console.log(tasks["Completed"]);
  }, [tasks]);

  const tasklar: { [key: string]: ITask } = {
    a: {
      deadline: "Mart 26",
      assigne: {
        avatar: "",
        username: "Amir",
        email: "Amir@gmail.com",
      },
      title:
        "[Metaco] - Create draft design for User Journey earning coin on Apps",
      content:
        "У нас лишний раз вызывается попап локейшн в каталоге. Надо его вызывать только, когда нет адреса в каталоге",
      grade: "2H",
      priority: TaskPriority.Emergency,
      state: TaskState.Do,
      type: TaskType.Task,
    },
    b: {
      deadline: "Aprel 5",
      assigne: {
        avatar: "",
        username: "Amir",
        email: "Amir@gmail.com",
      },
      title:
        "[Metaco] - Create draft design for User Journey earning coin on Apps",
      content:
        "У нас лишний раз вызывается попап локейшн в каталоге. Надо его вызывать только, когда нет адреса в каталоге",
      grade: "2H",
      priority: TaskPriority.Default,
      state: TaskState.Do,
      type: TaskType.Task,
    },
    r: {
      deadline: "Aprel 5",
      assigne: {
        avatar: "",
        username: "Amir",
        email: "Amir@gmail.com",
      },
      title:
        "[Metaco] - Create draft design for User Journey earning coin on Apps",
      content:
        "У нас лишний раз вызывается попап локейшн в каталоге. Надо его вызывать только, когда нет адреса в каталоге",
      grade: "2H",
      priority: TaskPriority.Critic,
      state: TaskState.Do,
      type: TaskType.Task,
    },
    x: {
      deadline: "Aprel 5",
      assigne: {
        avatar: "",
        username: "Amir",
        email: "Amir@gmail.com",
      },
      title:
        "[Metaco] - Create draft design for User Journey earning coin on Apps",
      content:
        "У нас лишний раз вызывается попап локейшн в каталоге. Надо его вызывать только, когда нет адреса в каталоге",
      grade: "2H",
      priority: TaskPriority.Emergency,
      state: TaskState.Do,
      type: TaskType.Task,
    },
    q: {
      deadline: "Aprel 5",
      assigne: {
        avatar: "",
        username: "Amir",
        email: "Amir@gmail.com",
      },
      title:
        "[Metaco] - Create draft design for User Journey earning coin on Apps",
      content:
        "У нас лишний раз вызывается попап локейшн в каталоге. Надо его вызывать только, когда нет адреса в каталоге",
      grade: "2H",
      priority: TaskPriority.Serious,
      state: TaskState.Do,
      type: TaskType.Task,
    },
  };
  const history = useHistory();
  const logoutUser = useCallback(() => {
    logout();
    history.push("/login");
  }, []);
  if (!loginState.success && !user) return null;
  return (
    <div className={styles.wrapper}>
      <NewTaskDialog
        show={showNewTaskDialog}
        onClose={() => setShowNewTaskDialog(false)}
      />
      <div className={styles.rightSection}>
        <Header user={user} logout={() => logoutUser()} />
        <div className={styles.canbanWrapper}>
          <div className={styles.canbansContainer}>
            <Canban
              title="Plan"
              tasks={tasks["Plan"]}
              onNewClick={() => setShowNewTaskDialog(true)}
            />
            <Canban
              title="In progress"
              tasks={tasks["In progress"]}
              onNewClick={() => setShowNewTaskDialog(true)}
            />
            <Canban
              title="To verify"
              tasks={tasks["To verify"]}
              onNewClick={() => setShowNewTaskDialog(true)}
            />
            <Canban
              title="Completed"
              tasks={tasks["Completed"]}
              onNewClick={() => setShowNewTaskDialog(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const connector = connect(
  (state: IAppreducers) => ({
    taskState: state.tasks.tasksState,
    tasks: state.tasks.tasks,
    user: state.auth.user,
    loginState: state.auth.loginState,
  }),
  {
    fetchTasks: taskActions.fetchTasks,
    logout: authActions.userLogout,
  }
);

type TPropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Home);
