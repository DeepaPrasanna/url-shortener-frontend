"use client";

// import { useFormStatus, useFormState } from "react-dom";
// import { useRef, useEffect } from "react";

// import { FormState, shortenUrl } from "@/app/actions/shortenUrl";

// type SubmitButtonProps = {
//   label: string;
//   loading: React.ReactNode;
// };

// const useFormReset = (formState: FormState) => {
//   const formRef = useRef<HTMLFormElement>(null);
//   const prevTimestamp = useRef(formState.timestamp);

//   useEffect(() => {
//     if (!formRef.current) return;
//     if (formState.timestamp !== prevTimestamp.current) {
//       formRef.current.reset();

//       prevTimestamp.current = formState.timestamp;
//     }
//   }, [formState.timestamp]);

//   return formRef;
// };

// const SubmitButton = ({ label, loading }: SubmitButtonProps) => {
//   const { pending } = useFormStatus();

//   return (
//     <button
//       type="submit"
//       className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//       disabled={pending}
//     >
//       {pending ? loading : label}
//     </button>
//   );
// };
// export const Form = () => {
//   const [formState, action] = useFormState(shortenUrl, {
//     result: "",
//     message: "",
//     timestamp: Date.now(),
//   });

//   const formRef = useFormReset(formState);

//   return (
//     <div className="text-center">
//       <form action={action} ref={formRef}>
//         <input
//           type="url"
//           name="url"
//           placeholder="Enter your URL"
//           className="w-72 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
//           required
//         />
//         <SubmitButton label="Shorten" loading="Creating ..." />
//         <div id="results" className="mt-4">
//           <p>
//             Results: <span>{formState.result ?? formState.message}</span>
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

import Link from "next/link";
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

export function Form() {
  const [formState, action] = useFormState(shortenUrl, {
    result: "",
    message: "",
    timestamp: Date.now(),
  });

  const formRef = useFormReset(formState);
  return (
    <div
      className="md:w-5/6
     bg-card text-card-foreground relative overflow-hidden rounded-xl border border-gray-800  bg-gradient-to-r from-black to-neutral-950 shadow-2xl mx-auto"
    >
      <form action={action} className="grid gap-4">
        <div className="space-y-2 m-6">
          <div className="text-lg font-medium leading-none p-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Enter the url
          </div>

          <div className="flex justify-between">
            <input
              className="flex h-12 w-5/6 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              required
              placeholder="https://example.com"
              autoComplete="url"
              name="url"
              type="url"
            />
            <button className="rounded ml-2 w-1/6 bg-primary text-primary-foreground shadow hover:bg-primary/90">
              Go
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-between">
          {/* <Button variant={"link"} size={"sm"} className="p-0" asChild>
            <Link href={"/reset-password"}>Forgot password?</Link>
          </Button> */}
        </div>
        {/* 
        {state?.fieldError ? (
          <ul className="list-disc space-y-1 rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">
            {Object.values(state.fieldError).map((err) => (
              <li className="ml-4" key={err}>
                {err}
              </li>
            ))}
          </ul>
        ) : state?.formError ? (
          <p className="rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">
            {state?.formError}
          </p>
        ) : null} */}
        {/* <SubmitButton className="w-full">Log In</SubmitButton>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/">Cancel</Link>
        </Button> */}
      </form>
      <div className="results m-6  flex justify-center gap-3">
        <input
          readOnly
          value={"https://tinyurl.com/3bhfxarw"}
          className="bg-secondary text-muted-foreground flex h-9 rounded-md border border-input  px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 w-3/5"
        />
        <button className="w-2/5 border rounded border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground">
          See In Action
        </button>
      </div>
    </div>
  );
}
