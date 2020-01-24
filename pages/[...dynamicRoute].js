import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { Category } from "../components/category";
import { withApollo } from "../lib/apollo";
import { ROUTE_QUERY } from "../routeQuery";
import { ProductPage } from "../components/productPage";

function Route() {
  const router = useRouter();
  console.log(router);
  const path = router.asPath;

  const { loading, error, data } = useQuery(ROUTE_QUERY, {
    variables: { path },
    fetchPolicy: "cache-first"
  });

  if (loading) return "loading…";
  if (error) return "something went terribly wrong";
  if (!data) return "No data for this route…";

  if (data.route.object.__typename === "Category") {
    return <Category data={data} />;
  }

  if (data.route.object.__typename === "Product") {
    return <ProductPage data={data} />;
  }

  return <pre>{JSON.stringify(data.route.object.__typename, null, 4)}</pre>;
}

export default withApollo(Route);
