import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Index.css";

import { BrowserRouter } from "react-router-dom";
// import dotenv from "dotenv";
import { createClient } from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

const projID = process.env.VITE_PROJECT_ID;
export const client = createClient({
  projectId: "aur0cyqw",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-08-31",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
