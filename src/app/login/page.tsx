"use client";

import { useRouter } from "next/navigation";
import { PiPlantBold } from "react-icons/pi";

import { login } from "../actions/auth";

function Login() {
  const router = useRouter();

  return (
    <div className="h-screen flex justify-center items-center">
      <div
        className="
     bg-card text-card-foreground relative overflow-hidden rounded-xl border border-gray-800  bg-gradient-to-r from-black to-neutral-950 shadow-2xl mx-auto md:w-1/3 "
      >
        <div className="space-y-4 m-6">
          <div className="flex justify-center flex-col gap-6 ">
            <PiPlantBold className="mx-auto text-7xl" />
            <p className="mx-auto p-1 text-sm lg:text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
              Sign Into Your Account
            </p>
            <form action={login}>
              <button
                className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10"
                type="submit"
              >
                Sign in with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
