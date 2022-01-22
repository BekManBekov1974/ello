import { Iconly } from "../../components/Iconly";
import { colors } from "../../constants/colors";
import { IUser } from "../../store/reducers/authReducer";
import { useStyles } from "./hooks/useStyles";
interface IHeaderProps {
  user: Partial<IUser>;
  logout: () => {} | void;
}
export const Header: React.FC<IHeaderProps> = ({ user, logout }) => {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSection}>
        <Iconly
          name="Menu2"
          color={colors.lightYellow}
          wrap
          bgColor={colors.blueDark}
        />
      </div>
      <div className={styles.rightSection}>
        <Iconly
          onClick={logout}
          style={{ marginRight: 15 }}
          name="Logout"
          size="md"
          color={colors.lightSky}
          wrap
          bgColor={colors.blueDark}
          wrapStyle="circle"
        />
        <Iconly
          name="Notification"
          color={colors.yellow}
          wrap
          bgColor={colors.blueDark}
          wrapStyle="circle"
        />
        <img
          width={40}
          className={styles.avatar}
          src={user.avatar || "/assets/images/avatarPlaceholder.png"}
        />
        <div>
          <span style={{ fontSize: 16, color: "white" }}>{user.userName}</span>
          <div style={{ color: colors.lightSky, fontSize: 14 }}>
            {user.email}
          </div>
        </div>
      </div>
    </div>
  );
};
