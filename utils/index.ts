export const removeEmptyStringValuesFromObj = <T extends Record<string, string>>(obj: T): Record<string, string> => {
  return Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== ""));
};
