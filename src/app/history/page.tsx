import { redirect } from "next/navigation";

import { createClient } from "../utils/supabase/server";
import Link from "next/link";

async function getData(email: string) {
  const res = await fetch(`https://api.teenyurl.in/history?email=${email}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function History() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  const allMyUrls = await getData(data.user.email as string);

  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      {allMyUrls.length ? (
        allMyUrls.map((info: any) => (
          <div
            className="bg-card text-card-foreground relative overflow-hidden rounded-xl border border-gray-800  bg-gradient-to-r from-black to-neutral-950 shadow-2xl hover:scale-105 hover:border-black hover:shadow-lg  w-80 md:w-1/2"
            key={info._id}
          >
            <div className="flex flex-col space-y-4 p-3">
              <div className="text-lg font-bold">teenyurl.in/{info.code}</div>
              <div className="text-muted-foreground text-xs">
                {info.longUrl}
              </div>

              <div className="flex flex-row text-xs text-muted-foreground justify-between">
                <div className="">
                  Created on: {new Date(info.createdOn).toLocaleDateString()}
                </div>
                <div className="">
                  Expires on:{" "}
                  {info?.expiresOn
                    ? new Date(info.expiresOn).toLocaleDateString()
                    : "N/A"}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <p>
            So squeaky clean here! Try shortening some URLs{" "}
            <Link href="/">here</Link>{" "}
          </p>
        </div>
      )}
    </div>
  );
}
