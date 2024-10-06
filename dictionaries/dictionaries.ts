import "server-only";

const dictionaries = {
  pl: () => import("./pl.json").then((module) => module.default),
  de: () => import("./de.json").then((module) => module.default),
};

export const getDictionary = dictionaries[(process.env.LANGUAGE as keyof typeof dictionaries) ?? "pl"];
