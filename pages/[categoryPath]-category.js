import { ROUTE_QUERY } from "../routeQuery";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { withApollo } from "../lib/apollo";
import { Category } from "../components/category";
import { Navigation } from "../components/navigation/header";
import { wrap } from ".";

function CategoryPage() {
  const router = useRouter();
  const path = router.asPath;

  const { loading, data } = useQuery(ROUTE_QUERY, {
    variables: { path },
    fetchPolicy: "cache-and-network"
  });

  const stale = data && loading;

  if (data) {
    return <Category data={data} style={{ opacity: stale ? 0.5 : 1 }} />;
  }

  if (loading) {
    return (
      <div className={wrap}>
        <Navigation />
        <div style={{ marginTop: "2em" }}>Loading category: {path}</div>
      </div>
    );
  }

  return `Error loading category: ${path}`;
}

export default withApollo(CategoryPage);
