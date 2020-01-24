import React from "react";
import { styled } from "linaria/react";
import { css } from "linaria";
import theme from "../theme";
import Link from "next/link";

const border = "1px solid #F3F3F3";

const styles = css`
  --color-secondary: white;
  @custom-media --above-sm (min-width: 30em);

  list-style: none;
  background: white;
  line-height: 1.8;
  border: ${border};

  .details {
    @media (--above-sm) {
      /* background: purple; */
    }
    padding: 0.5em;
    border-top: ${border};
    display: flex;
    flex-direction: column;
    height: calc(100% - 1em);

    header {
      /* color: ${theme.colors.secondary}; */
      display: block;
      font-size: 0.8em;

      > * {
        margin: 0;
      }

      h4 {
        /* color: var(--color-secondary); */
        font-weight: normal;
      }
    }
  }
  .price {
    font-size: var(--sizesm);
    /* color: var(--color-primary); */
  }
`;

const image = css`
  padding-top: 100%;
  height: 0;
  position: relative;
  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Header = styled("header")`
  /* background: salmon; */
`;

// Works fine
const StyledHeader = styled(Header)`
  /* border: 1px solid red; */
`;

// THIS BREAKS
// See: https://github.com/callstack/linaria/issues/447

// function TestStylingReactComponent({ children, ...rest }) {
//   return <div {...rest}>{children}</div>;
// }

// const StyledTest = styled(TestStylingReactComponent)`
//   background: blueviolet;
// `;

function formatPrice(price) {
  return new Intl.NumberFormat("se-se", {
    style: "currency",
    currency: "SEK"
  }).format(price);
}

function ProductCard({ product, color, mb }) {
  const style = inline({ background: color, marginBottom: mb + "em" });

  return (
    <li className={styles}>
      <div className={image}>
        <img src={product.images[0].url} alt="" />
      </div>

      <div className="details">
        <StyledHeader style={style}>
          <Link href="[productPath]-product" as={product.primaryRoute.path}>
            <a>
              <h3>{product.name}</h3>
              <h4>{product.subName}</h4>
            </a>
          </Link>
        </StyledHeader>
        <div className="price">{formatPrice(product.price.incVat)}</div>
      </div>
    </li>
  );
}

function inline(styles) {
  const cleanedStyles = {};
  const styleKeys = Object.keys(styles);

  if (styleKeys.length === 0) return;

  for (let i = 0; i < styleKeys.length; i++) {
    const style = styles[styleKeys[i]];

    if (!style) break;
    if (style === "") break;
    if (style.indexOf("undefined") !== -1) break;

    cleanedStyles[styleKeys[i]] = style;
  }

  return cleanedStyles;
}

export default ProductCard;
