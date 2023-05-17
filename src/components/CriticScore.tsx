import { Badge, background } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";

interface ScoreProps {
  score: number;
}
const CriticScore = ({ score }: ScoreProps) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
