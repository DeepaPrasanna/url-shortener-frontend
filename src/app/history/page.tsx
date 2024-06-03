import { redirect } from "next/navigation";
import Link from "next/link";

import { createClient } from "../utils/supabase/server";
import Card from "../components/card";

async function getData(email: string) {
  const res = await fetch(
    `http://teenyurl.ap-south-1.elasticbeanstalk.com/history?email=${email}`
  );
  console.log(res);
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
    <div className="h-screen flex flex-col justify-center items-center space-y-2 mb-14">
      {allMyUrls.length ? (
        allMyUrls.map((info: any) => (
          <Card classes="  w-80 md:w-1/2" hoverEffect key={info._id}>
            <div className="flex flex-col space-y-4 p-3">
              <div className="text-lg font-bold">teenyurl.in/{info.code}</div>
              <div className="text-muted-foreground text-xs">
                {info.longUrl}
              </div>

              <div className="flex flex-row text-xs text-muted-foreground justify-between pb-2">
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
          </Card>
        ))
      ) : (
        <div className="p-2">
          <p>
            So squeaky clean! Try shortening some URLs{" "}
            <Link href="/">
              <span className="underline underline-offset-2">here</span>
            </Link>{" "}
          </p>
        </div>
      )}
    </div>
  );
}
