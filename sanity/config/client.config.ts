const config = {
  projectId: process.env.SANITY_PROJECTID || "SANITY_PROJECTID",
  dataset: process.env.SANITY_DATASET || "SANITY_DATASET",
  apiVersion: process.env.SANITY_API_VERSION || "SANITY_API_VERSION",
  useCdn: false,
};

export default config;
