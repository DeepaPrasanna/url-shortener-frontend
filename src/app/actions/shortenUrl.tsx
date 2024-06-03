"use server";

import { createClient } from "../utils/supabase/server";

export type FormState = {
  originalUrl: FormDataEntryValue | null;
  result: string;
  message: string;
  timestamp?: number | null;
};

export const shortenUrl = async (formState: FormState, formData: FormData) => {
  const supabase = createClient();

  let email = null;
  const { data, error } = await supabase.auth.getUser();
  if (data?.user?.email) {
    email = data.user.email;
  }

  const url = formData.get("url");
  const ttl = formData.get("ttl");

  let body: { url: string; ttl?: Date; email?: string } = {
    url: url as string,
  };

  if (ttl) {
    const dateStr = ttl as string;
    const [month, day, year] = dateStr.split("/");
    const isoDateStr = `${year}-${month}-${day}T23:59:00`;

    const date = new Date(isoDateStr);
    body = { ...body, ttl: date };
  }
  if (email) body = { ...body, email };

  const res = await fetch("https://api.teenyurl.in/api/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const responseBody = await res.json();

  return {
    originalUrl: url,
    message:
      res.status === 200
        ? responseBody.message
        : res.status === 400
        ? responseBody.errors[0].msg
        : responseBody?.message,
    result: responseBody.result,
    timestamp: Date.now(),
  };
};
