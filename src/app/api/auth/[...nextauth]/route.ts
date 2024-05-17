import { redirect } from "next/navigation";
import { handlers } from "../../../../auth";

export const { GET, POST } = handlers;
export const runtime = "edge"; // optional
