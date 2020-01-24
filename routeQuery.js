import gql from "graphql-tag";
export const ROUTE_QUERY = gql`
  query route($path: String!) {
    route(path: $path) {
      object {
        ... on Category {
          id
          name
          products {
            totalResults
            result {
              id
              articleNumber
              name
              subName
              price {
                incVat
              }
              images {
                url
              }
            }
          }
        }
      }
    }
  }
`;
