import { createClient } from "urql";

export const APIClient = createClient({
  url: "https://urban-api.arcgis.com/graphql",
  requestPolicy: "cache-first",
});
