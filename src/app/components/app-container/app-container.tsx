import React from "react";
import { Box } from "@chakra-ui/react";

interface IAppContainer {
  children: React.ReactNode;
}

export function AppContainer({ children }: IAppContainer) {
  return (
    <Box as="div" className="container" w="90%" mx="auto">
      {children}
    </Box>
  );
}
