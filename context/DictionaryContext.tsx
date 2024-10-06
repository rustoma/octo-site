"use client";

import { createContext, ReactNode } from "react";
import React from "react";

import dictionaryPL from "@/dictionaries/pl.json";

type DictionaryContextType = {
  t: typeof dictionaryPL;
};

export const DictionaryContext = createContext<DictionaryContextType>({
  t: dictionaryPL,
});

interface DictionaryProviderWrapperProps {
  children: ReactNode | ReactNode[];
  dictionary: typeof dictionaryPL;
}

const DictionaryProvider = ({ children, dictionary }: DictionaryProviderWrapperProps) => {
  return <DictionaryContext.Provider value={{ t: dictionary }}>{children}</DictionaryContext.Provider>;
};

const useDictionary = () => {
  const context = React.useContext(DictionaryContext);
  if (context === undefined) {
    throw new Error("useWindowDimensions must be used within a WindowDimensionsProvider");
  }
  return context;
};

export { DictionaryProvider, useDictionary };
