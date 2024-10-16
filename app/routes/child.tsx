import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import React from "react";

export async function loader() {
  return json({ parent: true });
}

export default function Parent() {
  const data = useLoaderData();
    
  return <div>Parent component: {JSON.stringify(data)}</div>;
}