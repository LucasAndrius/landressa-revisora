const config = {
  projectId: process.env.SANITY_PROJECTID || "sanity_id",
  dataset: process.env.SANITY_DATASET || "sanity_dataset",
  apiVersion: process.env.SANITY_API_VERSION || "sanity_api",
  useCdn: false,
};

export default config;
