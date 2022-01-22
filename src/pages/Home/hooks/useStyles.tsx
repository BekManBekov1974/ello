import { createStyles, makeStyles } from "@mui/styles";
import { colors } from "../../../constants/colors";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      minHeight: "100vh",
      display: "flex",
      background: colors.background,
    },
    rightSection: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    canbanWrapper: {
      boxSizing: "border-box",
      width: "100%",
      paddingBottom: 10,
      display: "flex",
      justifyContent: "center",
      flex: "1 0 auto",
    },
    canbansContainer: {
      display: "flex",

      width: 0,
      flex: "1 0 auto",
    },
  })
);
