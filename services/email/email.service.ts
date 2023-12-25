import { EMAIL_ROUTES } from "@/services/email/email.routes";
import { Email } from "@/services/email/email.types";

export const sendEmail = async (email: Email) => {
  const res = await fetch(EMAIL_ROUTES.single(), { method: "POST", body: JSON.stringify(email) });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  return res.json();
};
