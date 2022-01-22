import { createStyles, makeStyles } from "@mui/styles";
import { colors } from "../../../constants/colors";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      flexDirection: "column",

      width: 350,
      marginRight: 15,
      padding: 2,
    },
    titleBar: {
      marginTop: 25,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 2,
      color: colors.lightSky,
      background: colors.blue,
      padding: `0 15px`,
      height: 36,
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 4,
    },
    counter: {
      borderRadius: 4,
      minWidth: 24,
      textAlign: "center",
      background: "#202121",
      padding: "0 8px",
      color: "white",
      lineHeight: 2,
      fontSize: 16,
    },
    cardsWrapper: {
      overflow: "overlay",
      overflowY: "scroll",
      flex: "1 0 auto",
      height: 0,
      width: 360,
      boxSizing: "border-box",
      "& >div": {
        marginTop: 0,
      },
    },
  })
);
