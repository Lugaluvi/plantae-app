import { styled } from "@mui/material";
import React from "react";
import { BrandIcon } from "../icons";
import { motion } from "framer-motion";

const Button = styled("div")(() => ({
  width: "108px",
  height: "108px",
  position: "fixed",
  bottom: "0",
  right: "0",
  marginBottom: "16px",
  marginRight: "26px",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
}));

const Circle = styled("div")(() => ({
  width: "108px",
  height: "108px",
  background: "#f2f2f2",
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));

const InnerCircle = styled("div")(() => ({
  width: "103.68px",
  height: "103.68px",
  left: "280.16px",
  top: "644.16px",
  border: "1px solid #ACACAC",
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

const Text = styled("div")(() => ({
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "13px",
  lineHeight: "20px",
  color: "#383838",
}));

type Props = {
  onClick: () => void;
};

export const SprinkleButton = ({ onClick }: Props) => {
  return (
    <Button>
      <motion.div whileTap={{ scale: 1.2 }} style={{ borderRadius: "100%" }}>
        <Circle onClick={onClick}>
          <InnerCircle>
            <BrandIcon />
            <Text>Regar</Text>
          </InnerCircle>
        </Circle>
      </motion.div>
    </Button>
  );
};
