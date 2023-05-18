import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

// to pass <GameCard/> and <GameSkeleton/> component
interface Props {
  children: ReactNode; //<GameCard/> and <GameSkeleton/> component
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box maxWidth="300px" borderRadius={5} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;