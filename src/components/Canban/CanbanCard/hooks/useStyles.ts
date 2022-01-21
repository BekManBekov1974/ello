import { createStyles, makeStyles } from "@mui/styles";
import { colors } from "../../../../constants/colors";

export const useStyles = makeStyles(() =>
  createStyles({
    back: {
      borderRadius: 5,
    },
    wrapper: {
      background: "white",
      padding: "14px 16px",
      margin: "0px 0 12px",
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
      fontWeight: "bold",
      textTransform: "uppercase",
      flex: "1 1 0",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
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
      marginTop: 15,
    },
  })
);
