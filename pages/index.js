import {
  Navigation,
  ALL_CATEGORIES_QUERY
} from "../components/navigation/header";
import { css } from "linaria";
import "normalize.css";
import { fetcher } from "../lib/api";

function IndexPage({ data }) {
  return (
    <div className={wrap}>
      <Navigation data={data} />
    </div>
  );
}

export const wrap = css`
  max-width: 80em;
  margin: 0 auto;
`;

css`
  :global() {
    body {
      font-size: 16px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }
  }
`;

// not sure how to use getServerProps yet
export const unstable_getStaticProps = async () => {
  const categories = await fetcher(ALL_CATEGORIES_QUERY, { levels: 1 });
  return { props: { data: categories } };
};

export default IndexPage;
