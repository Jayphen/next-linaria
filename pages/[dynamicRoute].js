import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { Category } from "../components/category";
import { withApollo } from "../lib/apollo";
import { ROUTE_QUERY } from "../routeQuery";

function Route() {
  const router = useRouter();
  const path = router.query.dynamicRoute;

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

  return <pre>{JSON.stringify(data.route.object.__typename, null, 4)}</pre>;
}

export default withApollo(Route);