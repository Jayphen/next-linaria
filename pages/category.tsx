import { useRouter } from "next/router";
import useSWR from "swr";
import { Category } from "../components/category";
import { ALL_CATEGORIES_QUERY } from "../components/navigation/header";
import { fetcher } from "../lib/api";
import { ROUTE_QUERY } from "../routeQuery";

function CategoryPage({ data: initialData, categories }) {
  const { asPath } = useRouter();

  const resp = useSWR(
    [ROUTE_QUERY, asPath],
    q => {
      return fetcher(q, { path: asPath });
    },
    {
      initialData
    }
  );

  const { data } = resp;

  if (categories) {
    return <Category data={data} categories={categories} style={{}} />;
  }

  // if (loading) {
  //   return (
  //     <div className={wrap}>
  //       <Navigation />
  //       <div style={{ marginTop: "2em" }}>Loading category: {path}</div>
  //     </div>
  //   );
  // }

  return `Error loading category: ${asPath}`;
}

CategoryPage.getInitialProps = async ({ asPath }) => {
  const data = await fetcher(ROUTE_QUERY, { path: asPath });
  const categories = await fetcher(ALL_CATEGORIES_QUERY, { levels: 1 });
  return { data, categories };
};

export default CategoryPage;
