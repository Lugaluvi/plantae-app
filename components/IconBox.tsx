import { styled } from "@mui/material";
import React from "react";
import { ClockIcon, HumanIcon, RobotIcon } from "../icons";

type Props = {
  color?: "green" | "red";
  icon?: "clock" | "robot" | "human";
};

enum Color {
  green = "rgba(61, 119, 56, 0.26)",
  red = "rgba(119, 56, 56, 0.33)",
}

const Box = styled("div")(() => ({
  width: "40px",
  height: "40px",
  borderRadius: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const IconBox: React.FC<Props> = ({
  color = "green",
  icon = "clock",
}) => {
  return (
    <Box style={{ backgroundColor: Color[color] }}>
      {
        {
          clock: <ClockIcon color={color} />,
          robot: <RobotIcon color={color} />,
          human: <HumanIcon color={color} />,
        }[icon]
      }
    </Box>
  );
};
