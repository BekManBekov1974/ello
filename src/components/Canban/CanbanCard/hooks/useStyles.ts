import { createStyles, makeStyles } from "@mui/styles";
import { colors } from "../../../../constants/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    back: {
      borderRadius: 2,
    },
    wrapper: {
      background: "white",
      padding: 8,
      margin: "0px 0 5px",
      boxSizing: "border-box",
      minWidth: 350,
      maxWidth: 350,
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    taskTitle: {
      fontWeight: 600,
      textTransform: "uppercase",
      flex: "1 1 0",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      fontSize: 14,
    },
    reaction: {
      width: 24,
      height: 24,
      borderRadius: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: colors.background,
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 5,
    },
  })
);
