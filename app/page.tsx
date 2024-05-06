import { redirect } from "next/navigation";

async function Page() {
  return redirect("/dashboard");
}

export default Page;
