import { json } from "@remix-run/node"; 
import { useLoaderData } from "@remix-run/react";
import {
    Links,
    Meta,
    Outlet,
    Scripts,
  } from "@remix-run/react";
  
  export const loader = async () => {
    const data = { parent: true };
  
    return json( data );
  };

  export default function App() {
    return (
      <html>
        <head>
          <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
          />
          <Meta />
          <Links />
        </head>
        <body>
          <h1>Hello World!</h1>
          <p>parent loader data: {JSON.stringify(useLoaderData())}</p>
          <Outlet />
  
          <Scripts />
        </body>
      </html>
    );
  }
  