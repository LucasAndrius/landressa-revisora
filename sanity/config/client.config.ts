const config = {
  projectId: process.env.SANITY_PROJECTID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  useCdn: false,
};

console.log(process.env.SANITY_PROJECTID);
console.log(process.env.SANITY_DATASET);
console.log(process.env.SANITY_API_VERSION);

export default config;
