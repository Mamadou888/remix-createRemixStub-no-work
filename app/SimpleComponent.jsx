import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return json(await fakeDb.invoices.findAll());
}

export default function Invoices() {
  const data = useLoaderData();
  return <div>Simple Component with data: {data}</div>;
}