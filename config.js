const config = {};

config.host = process.env.HOST || "[the endpoint URI of your Azure Cosmos DB account]";
config.authKey =
  process.env.AUTH_KEY || "[the Primary KEY value of your Azure Cosmos DB account]";
config.databaseId = "sumproDB";
config.containerId = "Collection01";

if (config.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`);
}

module.exports = config;
