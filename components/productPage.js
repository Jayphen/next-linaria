import { wrap } from "../pages";
import { Navigation } from "./navigation/header";
import { css } from "linaria";

export function ProductPage({ data }) {
  return (
    <div className={wrap}>
      <Navigation />
      <div className={styles}>
        <>
          <h1>{data.route.object.name}</h1>
        </>
      </div>
    </div>
  );
}

const styles = css``;
