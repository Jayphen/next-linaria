import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { wrap } from ".";
import { Navigation } from "../components/navigation/header";
import { ProductPage } from "../components/productPage";
import { withApollo } from "../lib/apollo";
import { ROUTE_QUERY } from "../routeQuery";

function ProductRoute() {
  const router = useRouter();
  const path = router.asPath;

  const { loading, data } = useQuery(ROUTE_QUERY, {
    variables: { path },
    fetchPolicy: "cache-and-network"
  });

  const stale = data && loading;

  if (data) {
    return <ProductPage data={data} style={{ opacity: stale ? 0.5 : 1 }} />;
  }

  if (loading) {
    return (
      <div className={wrap}>
        <Navigation />
        <div style={{ marginTop: "2em" }}>Loading product: {path}</div>
      </div>
    );
  }

  return `Error loading category: ${path}`;
}

export default withApollo(ProductRoute);
