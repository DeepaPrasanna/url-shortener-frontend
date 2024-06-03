"use client";

import { PiPlantBold } from "react-icons/pi";

import Card from "../components/card";
import { login } from "../actions/auth";
import Button from "../components/button";

function Login() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card classes="mx-auto md:w-1/3 ">
        <div className="space-y-4 m-6">
          <div className="flex justify-center flex-col gap-6 ">
            <PiPlantBold className="mx-auto text-7xl" />
            <p className="mx-auto p-1 text-sm lg:text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
              Sign Into Your Account
            </p>
            <form action={login}>
              <Button
                primary
                classes=" w-full shadow  h-10"
                type="submit"
                text="Sign in with Google"
              />
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Login;
