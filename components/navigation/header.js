import { css } from "linaria";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "../../lib/api";
import theme from "../../theme/fromFlight";

export function Navigation(props) {
  const resp = useSWR(ALL_CATEGORIES_QUERY, q => fetcher(q, { levels: 1 }), {
    initialData: props?.data
  });

  const { loading, data } = resp;

  if (loading) return <div>loading</div>;

  return (
    <ul className={navStyles}>
      {data.categories.map(category => {
        return (
          <li key={category.id}>
            <Link href="/category" as={category.primaryRoute.path}>
              <a>{category.name}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export const ALL_CATEGORIES_QUERY = `
  query categories($levels: Int) {
    categories(levels: $levels) {
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
