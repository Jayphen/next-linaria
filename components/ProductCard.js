import React from "react";
import { styled } from "linaria/react";
import { css } from "linaria";
import theme from "../theme";
import trendTheme from "../theme/fromFlight";
import Link from "next/link";

/**
 * 🚨 ATTN!
 * The CSS for this file is clearly a mess. Don't take this as an example of
 * how one should write CSS using Linaria. I've been using this as a testbed
 * for playing with postCSS plugins etc.
 */

const styles = css`
  --color-secondary: white;
  @custom-media --above-sm (min-width: 30em);

  list-style: none;
  background: #white;
  line-height: 1.8;

  .details {
    @media (--above-sm) {
      /* background: purple; */
    }
    padding: 0.5em;
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

      h3 {
        font-weight: normal;
        font-size:1em;
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
  a {
    color: currentColor;
    transition: all 0.2s linear;
    text-decoration: none;
    img {
    transition: all 0.2s linear;

    }
    &:hover {
      color: ${trendTheme.colors.blue};
      img {
        opacity:0.8
      }
    }
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
    object-fit: cover;
    width: 100%;
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
      <Link href="/product" as={product.primaryRoute.path}>
        <a>
          <div className={image}>
            <img src={product.images[0].url} alt="" />
          </div>

          <div className="details">
            <StyledHeader style={style}>
              <h3>{product.name}</h3>
              {product.subName && <h4>{product.subName}</h4>}
            </StyledHeader>
            <div className="price">{formatPrice(product.price.incVat)}</div>
          </div>
        </a>
      </Link>
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
