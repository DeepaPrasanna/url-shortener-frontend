"use client";

import { useFormStatus, useFormState } from "react-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

import { FormState, shortenUrl } from "@/app/actions/shortenUrl";

const FormChild = ({ formState }: { formState: FormState }) => {
  const [startDate, setStartDate] = useState(new Date());

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
        onChange={(date) => setStartDate(date as Date)}
        placeholderText="Expiry (optional)"
        withPortal
        name="ttl"
      />

      <button
        className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10"
        disabled={data.pending}
      >
        Submit
      </button>
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

  return (
    <div
      className="md:w-5/6
     bg-card text-card-foreground relative overflow-hidden rounded-xl border border-gray-800  bg-gradient-to-r from-black to-neutral-950 shadow-2xl mx-auto 2xl:h-2/3"
    >
      <form
        action={action}
        className={`space-y-4 m-6  ${
          formState.message === "success" ? "hidden" : "block"
        }`}
      >
        <FormChild formState={formState} />
      </form>
      <div
        className={` m-4 space-y-2 ${
          formState.message === "success" ? "block" : "hidden"
        }`}
      >
        <p className="text-sm lg:text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Long URL :
        </p>
        <input
          readOnly
          value={formState.originalUrl as string}
          className="bg-secondary text-muted-foreground w-full flex h-9 rounded-md border border-input  px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />

        <p className="text-sm lg:text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Short URL :
        </p>

        <div className={` m-6  flex justify-center gap-3 `}>
          <input
            readOnly
            value={
              formState.message === "success"
                ? `teenyurl.in/${formState.result.split("/")[1]}`
                : ""
            }
            className="bg-secondary text-muted-foreground flex h-9 rounded-md border border-input  px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-3/5"
          />
          <button
            className="w-2/5 border rounded border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground text-xs lg:text-sm"
            onClick={() => {
              window.open(`${formState.result.split("/")[1]}`, "_blank");
            }}
          >
            See In Action
          </button>
        </div>
        {formState?.message === "success" && (
          <div className="flex justify-center items-center">
            <QRCodeSVG
              value={`teenyurl.in/${formState.result.split("/")[1]}`}
              includeMargin
              width="30%"
              height="30%"
            />
          </div>
        )}
        <div>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-md px-8"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}
