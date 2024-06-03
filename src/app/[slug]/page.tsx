import { redirect } from "next/navigation";

async function getData(slug: string) {
  const res = await fetch(`https://api.teenyurl.in/${slug}`);

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
