import { useRoutes } from "react-router";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About/About";
import Products from "../pages/Products/Products";
import ProductsSearch from "../pages/ProductsSearch/ProductsSearch";
import Recipes from "../pages/Recipes/Recipes";
import { path } from "../constants/path";
import Homepage from "../pages/Homepage/Homepage";

const useRoute = () => {
  const routes = [
    {
      path: path.homepage,
      element: <MainLayout />,
      children: [
        {
          path: path.homepage,
          element: <Homepage />,
        },
        {
          path: path.recipes,
          element: <Recipes />,
        },
        {
          path: path.products,
          element: <Products />,
        },
        {
          path: path.productsSearch,
          element: <ProductsSearch />,
        },
        {
          path: path.about,
          element: <About />,
        },
      ],
    },
  ];
  return useRoutes(routes);
};

export default useRoute;
