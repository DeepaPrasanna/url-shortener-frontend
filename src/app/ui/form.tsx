"use client";

import { useFormStatus, useFormState } from "react-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

import { FormState, shortenUrl } from "@/app/actions/shortenUrl";

import Card from "../components/card";
import Button from "../components/button";
import { FaCheck, FaRegCopy } from "react-icons/fa";

const FormChild = ({ formState }: { formState: FormState }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  const data = useFormStatus();

  return (
    <>
      <div className="flex justify-between p-1 text-sm lg:text-lg font-medium leading-none ">
        <p className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Enter the url
        </p>
        <p
          className={
            formState.message !== "success" ? "block text-red-500" : "hidden"
          }
        >
          {formState.message}
        </p>
      </div>

      <input
        className=" h-12 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        required
        placeholder="https://example.com"
        autoComplete="url"
        name="url"
        type="url"
      />

      <p className="text-sm lg:text-lg font-medium leading-none p-1 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Enter the expiry time (optional)
      </p>
      <DatePicker
        className="w-full h-12 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        selected={startDate}
        isClearable
        onChange={(date) => setStartDate(date)}
        placeholderText="DD/MM/YYYY"
        withPortal
        name="ttl"
      />

      <Button
        classes="shadow w-full h-10"
        disabled={data.pending}
        primary
        text="Submit"
      />
    </>
  );
};

export function Form() {
  const [formState, action] = useFormState(shortenUrl, {
    originalUrl: "",
    result: "",
    message: "",
    timestamp: Date.now(),
  });

  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    const shortUrl = `teenyurl.in/${formState.result.split("/").pop()}`;
    navigator.clipboard.writeText(shortUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Card classes="md:w-5/6 mx-auto 2xl:my-auto ">
      <form
        action={action}
        className={`space-y-4 m-6  ${formState.message === "success" ? "hidden" : "block"
          }`}
      >
        <FormChild formState={formState} />
      </form>
      <div
        className={`m-4 space-y-2 ${formState.message === "success" ? "flex flex-col gap-2" : "hidden"
          }`}
      >
        <div>
          <p className="text-sm lg:text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 py-1">
            Long URL :
          </p>
          <input
            readOnly
            value={formState.originalUrl as string}
            className="bg-secondary text-muted-foreground w-full flex h-9 rounded-md border border-input  px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>

        <div>
          <p className="text-sm lg:text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 py-1">
            Short URL :
          </p>

          <div className="relative">
            <input
              readOnly
              value={
                formState.message === "success"
                  ? `teenyurl.in/${formState.result.split("/").pop()}`
                  : ""
              }
              className="bg-secondary text-muted-foreground flex h-9 rounded-md border border-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-full"
            />
            <button
              onClick={handleCopyToClipboard}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-secondary text-muted-foreground border border-input px-2 py-1 rounded-md"
            >
              {copied ? <FaCheck className="text-green-500" /> : <FaRegCopy />}
            </button>
          </div>
        </div>

        {formState?.message === "success" && (
          <div className="flex justify-center items-center">
            <QRCodeSVG
              value={`teenyurl.in/${formState.result.split("/").pop()}`}
              includeMargin
              width="30%"
              height="30%"
            />
          </div>
        )}
        <div className="flex justify-between">
          <Button
            classes="border border-input h-10 rounded-md px-4 lg:px-8"
            onClick={() => {
              window.open(`${formState.result.split("/").pop()}`, "_blank");
            }}
            text="Visit"
            primary
          />
          <Button
            onClick={() => window.location.reload()}
            classes="border border-input h-10 px-4 lg:px-8"
            text="Shorten another?"
            foreground
          />
        </div>
      </div>
    </Card>
  );
}
