import { useRouter } from "next/router";
import { Category } from "../components/category";
import { ROUTE_QUERY } from "../routeQuery";
import { ProductPage } from "../components/productPage";
import { fetcher } from "../lib/api";
import useSWR from "swr";
import { ALL_CATEGORIES_QUERY } from "../components/navigation/header";

function Route({ data: initialData, categories }) {
  const { asPath } = useRouter();

  const resp = useSWR(
    [ROUTE_QUERY, asPath],
    q => fetcher(q, { path: asPath }),
    {
      initialData
    }
  );
  const { error, loading, data } = resp;

  if (loading) return "loading…";
  if (error) return "something went terribly wrong";
  if (!data) return "No data for this route…";

  if (data.route.object.__typename === "Category") {
    return <Category data={data} categories={categories} />;
  }

  if (data.route.object.__typename === "Product") {
    return <ProductPage data={data} />;
  }

  return <pre>{JSON.stringify(data.route.object.__typename, null, 4)}</pre>;
}

Route.getInitialProps = async ({ asPath }) => {
  const data = await fetcher(ROUTE_QUERY, { path: asPath });
  const categories = await fetcher(ALL_CATEGORIES_QUERY, { levels: 1 });
  return { data, categories };
};

export default Route;
