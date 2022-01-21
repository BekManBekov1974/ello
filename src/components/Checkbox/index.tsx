import React from "react";
import { colors } from "../../constants/colors";
import { Iconly } from "../Iconly";
import { useStyles } from "./hooks/useStyle";

interface ICheckboxProps {
  label: string;
  style?: React.CSSProperties;
}
export const Checkbox: React.FC<ICheckboxProps> = ({ label, style }) => {
  const styles = useStyles();
  return (
    <div className={styles.wrapper} style={style}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="check"
        value="asd"
      />
      <Iconly name="Check" color={colors.lightSky} />
      <label htmlFor="check">{label}</label>
    </div>
  );
};
