import { NextRequest } from "next/server";

import { httpClient } from "@/features/http";

export const POST = async (request: NextRequest) => {
  const data = await request.json();

  if (data.body.sf) {
    return Response.json("Email was sent successfully.");
  }

  let message = "";
  for (const [key, value] of Object.entries(data.body)) {
    if (key === "sf") continue;

    message += `${key}: ${value}\n\n`;
  }

  const res = await httpClient.post("/emails", { subject: data.subject, body: message });

  if (!res.ok) {
    throw new Error(`Sending email failed. status: ${res.status}`);
  }

  return Response.json("Email was sent successfully.");
};
