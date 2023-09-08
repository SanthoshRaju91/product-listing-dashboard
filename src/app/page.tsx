import { redirect } from "next/navigation";

export default function Index() {
  redirect("/main/generate");
  return null;
}
