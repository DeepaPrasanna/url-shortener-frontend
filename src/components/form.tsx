"use client";

import { useFormStatus, useFormState } from "react-dom";
import { useRef, useEffect } from "react";

import { FormState, shortenUrl } from "@/app/actions/shortenUrl";

type SubmitButtonProps = {
  label: string;
  loading: React.ReactNode;
};

const useFormReset = (formState: FormState) => {
  const formRef = useRef<HTMLFormElement>(null);
  const prevTimestamp = useRef(formState.timestamp);

  useEffect(() => {
    if (!formRef.current) return;
    if (formState.timestamp !== prevTimestamp.current) {
      formRef.current.reset();

      prevTimestamp.current = formState.timestamp;
    }
  }, [formState.timestamp]);

  return formRef;
};

const SubmitButton = ({ label, loading }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      disabled={pending}
    >
      {pending ? loading : label}
    </button>
  );
};
export const Form = () => {
  const [formState, action] = useFormState(shortenUrl, {
    result: "",
    message: "",
    timestamp: Date.now(),
  });

  const formRef = useFormReset(formState);

  return (
    <div className="text-center">
      <form action={action} ref={formRef}>
        <input
          type="url"
          name="url"
          placeholder="Enter your URL"
          className="w-72 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
        <SubmitButton label="Shorten" loading="Creating ..." />
        <div id="results" className="mt-4">
          <p>
            Results: <span>{formState.result ?? formState.message}</span>
          </p>
        </div>
      </form>
    </div>
  );
};
