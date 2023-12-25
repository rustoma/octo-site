import { NextRequest } from "next/server";

import { httpClient } from "@/features/http";
import { Email } from "@/services/email/email.types";

const getCaptchaResponse = async (gRecaptchaToken: string) => {
  const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;

  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    body: formData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  if (!res.ok) {
    throw new Error(`Sending email failed. status: ${res.status}`);
  }

  return await res.json();
};

const sendEmail = async (captchaResponse: any, data: Email) => {
  if (captchaResponse && captchaResponse.success && captchaResponse.score > 0.5) {
    let message = "";
    for (const [key, value] of Object.entries(data.body)) {
      if (key === "sf" || key === "gRecaptchaToken") continue;

      message += `${key}: ${value}\n\n`;
    }

    const res = await httpClient.post("/emails", { subject: data.subject, body: message });

    if (!res.ok) {
      throw new Error(`Sending email failed. status: ${res.status}`);
    }
  } else {
    console.log("fail: captchaResponse score: ", captchaResponse?.score);
    throw new Error(`Captcha verification failed.`);
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();

    if (data.body.sf) {
      return Response.json("Email was sent successfully.");
    }

    const captchaResponse = await getCaptchaResponse(data.body.gRecaptchaToken);

    await sendEmail(captchaResponse, data);

    return Response.json("Email was sent successfully.");
  } catch (e) {
    throw e;
  }
};
