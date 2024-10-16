import { json } from "@remix-run/node"; 
import { useLoaderData } from "@remix-run/react";
import React from "react";

export async function loader() {
  return json({ child: true });
}

export default function ChildComponent() {
  const data = useLoaderData();
    
  return <div>child loader data: {JSON.stringify(data)}</div>;
}