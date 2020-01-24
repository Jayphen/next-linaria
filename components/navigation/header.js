import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { css } from "linaria";
import theme from "../../theme/fromFlight";
import Link from "next/link";

export function Navigation() {
  const { loading, data } = useQuery(ALL_CATEGORIES_QUERY, {
    variables: { root: null }
  });

  if (loading) return "loading";

  return (
    <ul className={navStyles}>
      {data.categories.map(category => {
        return (
          <li key={category.id}>
            <Link
              href={"[categoryPath]-category"}
              as={`${category.primaryRoute.path}`}
            >
              <a>{category.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

const ALL_CATEGORIES_QUERY = gql`
  query categories($root: Int) {
    categories(root: $root) {
      id
      name
      primaryRoute {
        path
      }
    }
  }
`;

const navStyles = css`
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0 -0.5em;
  justify-content: space-between;
  margin-top: 1.5em;
  a {
    padding: 1em;
    font-size: 1em;
    color: currentColor;
    :hover {
      color: ${theme.colors.blue};
    }
  }
  ${theme.below.md} {
    font-size: 14px;
  }
  ${theme.below.sm} {
    flex-direction: column;
    text-align: center;
    a {
      display: block;
      padding: 0.5em;
    }
  }
`;
