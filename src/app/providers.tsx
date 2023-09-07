"use client";

import React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { Header } from "./components/header/header";

interface IProviders {
  children: React.ReactNode;
}

export function Providers({ children }: IProviders) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Header />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
