import { z } from "zod";

import { REGEX } from "@/features/forms/consts";

const requiredValidator = (message?: string) =>
  z
    .string({
      required_error: message,
    })
    .min(1, { message });

const emailValidator = (message?: string) =>
  z
    .string()
    .email({ message })
    .transform((val) => val.toLowerCase());

const digitsWithSpacesValidator = (message?: string) =>
  z
    .string()
    .regex(REGEX.number_spaces, {
      message: message,
    })
    .or(z.literal(""));

export const VALIDATORS = {
  required: requiredValidator,
  email: emailValidator,
  phoneNumber: digitsWithSpacesValidator,
};
