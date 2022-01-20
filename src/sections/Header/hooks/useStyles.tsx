import { createStyles, makeStyles } from "@mui/styles";
import { colors } from "../../../constants/colors";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      padding: "0 25px",
      width: "auto",
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& >div": {
        display: "flex",
        alignItems: "center",
      },
      background: colors.blue,
      borderRadius: "0 0 10px 10px",
      boxShadow: `0px 4px 4px rgba(4, 60, 105, 0.2)`,
    },
    leftSection: {},
    rightSection: {},
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 30,
      margin: "0 15px",
      objectFit: "cover",
    },
  })
);
