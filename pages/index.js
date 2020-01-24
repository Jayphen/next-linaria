import { withApollo } from "../lib/apollo";
import { Navigation } from "../components/navigation/header";
import { css } from "linaria";
import "normalize.css";

function IndexPage() {
  return (
    <div className={wrap}>
      <Navigation />
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

export default withApollo(IndexPage);
