import gql from "graphql-tag";

const productFragment = gql`
  fragment ProductFragment on Product {
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
`;

export const ROUTE_QUERY = gql`
  query route($path: String!) {
    route(path: $path) {
      object {
        ... on Product {
          ...ProductFragment
        }
        ... on Category {
          id
          name
          products {
            totalResults
            result {
              ...ProductFragment
            }
          }
        }
      }
    }
  }
  ${productFragment}
`;
