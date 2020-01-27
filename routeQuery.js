export const ROUTE_QUERY = `
  query route($path: String!) {
    route(path: $path) {
      object {
        __typename
        ... on Product {
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
    primaryRoute {
      path
    }
        }
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
    primaryRoute {
      path
    }
            }
          }
        }
      }
    }
  }
`;
