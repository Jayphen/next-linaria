import { GraphQLClient } from "graphql-request";

const endpoint = "https://storeapi.jetshop.se";
const headers = {
  "content-type": "application/json",
  token: process.env.API_TOKEN,
  shopid: process.env.SHOP_ID
};

const graphQLClient = new GraphQLClient(endpoint, {
  headers
});

const fetcher = (query, variables) => graphQLClient.request(query, variables);

export { fetcher };
