import { css } from "linaria";
import { Navigation } from "../components/navigation/header";
import ProductCard from "../components/ProductCard";
import { wrap } from "../pages";
import theme from "../theme/fromFlight";

export function Category({ data, style, categories }) {
  return (
    <div className={wrap}>
      <Navigation data={categories} />
      <div className={styles}>
        {!data ? (
          <Error />
        ) : (
          <>
            <h1>{data.route.object.name}</h1>
            <ul className="product-grid" style={style}>
              {data.route.object.products.result.map(product => {
                return <ProductCard product={product} key={product.id} />;
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

function Error() {
  return <div>no data was found, what the heck? this should never happen</div>;
}

const styles = css`
  .product-grid {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1em;
    ${theme.below.md} {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
