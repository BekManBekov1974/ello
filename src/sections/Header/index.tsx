import { Iconly } from "../../components/Iconly";
import { colors } from "../../constants/colors";
import { useStyles } from "./hooks/useStyles";
interface IHeaderProps {
  title: string;
}
export const Header: React.FC<IHeaderProps> = ({ title }) => {
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
          style={{ marginRight: 15 }}
          name="Down"
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
          src="https://lh3.googleusercontent.com/a-/AOh14Gg-LW709j1soLMCvnx-TNrKIabj0C160KEwX6RAdQ=s96-c"
        />
        <div>
          <span style={{ fontSize: 16, color: "white" }}>
            Quvondiqov Allayor
          </span>
          <div style={{ color: colors.lightSky, fontSize: 14 }}>
            htecgf@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};
