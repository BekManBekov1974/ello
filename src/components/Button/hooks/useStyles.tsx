import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      borderRadius: 6,
      height: 50,
      fontFamily: "Roboto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 32px",
      minWidth: 120,
      fontSize: 18,
      cursor: "pointer",
      userSelect: "none",
      position: "relative",
    },
  })
);
