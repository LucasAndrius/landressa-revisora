import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemas";

const config = defineConfig({
  projectId: "y2qoak2g",
  dataset: "production",
  title: "Landressa",
  apiVersion: "2023-11-11",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
});

export default config;
