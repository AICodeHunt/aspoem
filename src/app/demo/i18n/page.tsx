import { api } from "~/trpc/server";
import Client from "./client";

export default async function A() {
  // const data = await api.poem.findById.query({
  //   id: 568,
  //   lang: "zh-Hant",
  // });

  return (
    <div>
      <Client />
    </div>
  );
}
