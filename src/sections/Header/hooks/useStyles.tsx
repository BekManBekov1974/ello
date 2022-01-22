import { createStyles, makeStyles } from "@mui/styles";
import { colors } from "../../../constants/colors";

export const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      padding: "0 16px",
      width: "auto",
      height: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& >div": {
        display: "flex",
        alignItems: "center",
      },
      background: colors.blue,
      boxShadow: `0px 4px 4px rgba(4, 60, 105, 0.2)`,
    },
    leftSection: {},
    rightSection: {},
    avatar: {
      width: 36,
      height: 36,
      borderRadius: 30,
      margin: "0 15px",
      objectFit: "cover",
    },
  })
);
