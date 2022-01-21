import { makeStyles, createStyles } from "@mui/styles";
import React from "react";
import getIcon from "./icons";
interface IIconProps {
  name: string;
  color: string;
  wrap?: boolean;
  style?: React.CSSProperties;
  bgColor?: string;
  size?: "sm" | "md" | "lg";
  wrapSize?: number;
  textIcon?: string;
  onClick?: () => {} | void;
  wrapStyle?: "circle" | "rounded" | "square";
}
export const Iconly: React.FC<IIconProps> = ({
  name,
  color,
  wrap = false,
  style,
  bgColor,
  size = "lg",
  wrapSize = 40,
  textIcon = "",
  wrapStyle = "rounded",
  onClick,
}) => {
  const styles = makeStyles((theme) =>
    createStyles({
      iconWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: bgColor,
        borderRadius:
          wrapStyle == "circle" ? "50%" : wrapStyle == "rounded" ? 11 : 0,
        width: wrapSize,
        height: wrapSize,
      },
    })
  )();
  const sizes = {
    md: 20,
    lg: 24,
    sm: 16,
  };
  return (
    <div
      className={wrap ? styles.iconWrapper : ""}
      style={{ lineHeight: 0, ...style, cursor: "pointer" }}
      onClick={onClick}
    >
      <svg
        width={sizes[size]}
        height={sizes[size]}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {getIcon(color, name)}
      </svg>
    </div>
  );
};
