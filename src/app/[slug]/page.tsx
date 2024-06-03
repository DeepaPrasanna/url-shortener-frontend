import { redirect } from "next/navigation";

async function getData(slug: string) {
  const res = await fetch(`http://teenyurl.ap-south-1.elasticbeanstalk.com/${slug}`);

  console.log(res)
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.url;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  redirect(data);
}
