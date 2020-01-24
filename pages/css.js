import React from "react";
import { css } from "linaria";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import flightTheme from "../theme/fromFlight";

css`
  :global() {
    body {
      font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
        Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol";
      background: #f8f8f8;
    }
  }
`;

const styles = css`
  max-width: 80rem;
  margin: 2em auto;

  ${flightTheme.above.md} {
    background: pink;
  }

  .header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 320px;
    color: white;

    h1 {
      font-size: 2.5em;
    }

    img {
      height: 100%;
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }

  .product-list {
    margin: 0;
    padding: 0;
    margin-top: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1em;
  }
`;

function CSSExample() {
  return (
    <section className={styles}>
      <header className="header">
        <h1>Accessories</h1>
        <img
          src="https://www.demostore.se/pub_images/original/accessories2.jpg?extend=copy&amp;width=1024"
          alt=""
        />
      </header>

      <ul className="product-list">
        {[
          ...products.result,
          ...products.result,
          ...products.result,
          ...products.result,
          ...products.result,
          ...products.result
        ].map(product => {
          return <ProductCard product={product} />;
        })}
      </ul>
    </section>
  );
}

export default CSSExample;
