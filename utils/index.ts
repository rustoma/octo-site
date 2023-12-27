export const removeEmptyStringValuesFromObj = <T extends Record<string, string>>(obj: T): Record<string, string> => {
  return Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== ""));
};

export const getDomainId = (): string => {
  if (!process.env.NEXT_PUBLIC_DOMAIN_ID) {
    throw new Error("App config is missing");
  }

  return process.env.NEXT_PUBLIC_DOMAIN_ID;
};
