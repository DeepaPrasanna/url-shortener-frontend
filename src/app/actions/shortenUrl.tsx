"use server";

export type FormState = {
  originalUrl:FormDataEntryValue | null;
  result: string;
  message: string;
  timestamp?: number;
};

export const shortenUrl = async (formState: FormState, formData: FormData) => {
  const url = formData.get("url");
  const res = await fetch("https://api.teenyurl.in/api/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  const responseBody = await res.json();

  return {
    originalUrl: url,
    message:
      res.status === 200
        ? responseBody.message
        : res.status === 400
        ? responseBody.errors[0].msg
        : responseBody.message,
    result: responseBody.result,
    timestamp: Date.now(),
  };
};
