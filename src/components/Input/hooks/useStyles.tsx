import { createStyles, makeStyles } from "@mui/styles";
import { colors } from "../../../constants/colors";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      borderRadius: 6,
      minHeight: 50,
      fontFamily: "Roboto",
      display: "flex",
      alignItems: "center",
      padding: "0 24px",
      fontSize: 18,
      cursor: "pointer",
      userSelect: "none",
      background: colors.lightSky + "3F",
      position: "relative",
      transition: "0.2s linear",
    },
    input: {
      boxSizing: "border-box",
      width: "100%",
      border: "none",
      fontSize: 18,
      background: "none",
      outline: "none",
      color: colors.blueDark,
      "&::placeholder": {
        color: colors.lightSky,
      },
    },
    leftIcon: {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      left: 15,
    },
    rightIcon: {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      right: 15,
    },
    label: {
      position: "absolute",
      left: 15,
      transform: "translateY(-120%)",
    },
    errorWrapper: {
      padding: 5,
      paddingLeft: 10,

      display: "flex",
      alignItems: "center",
      minHeight: 20,
      color: colors.crimsonRed,
      "& svg": {
        marginRight: 7,
      },
    },
    textarea: {
      border: "none",
      fontSize: 18,
      background: "none",
      fontFamily: "Roboto",
      outline: "none",
      width: "100%",
      resize: "none",
      "&::placeholder": {
        color: "#999999",
      },
    },
  })
);
