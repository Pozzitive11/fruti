import HomePage from "pages/home-page/ui/HomePage";
import AboutPage from "pages/about-page/ui/AboutPage";
import ErrorPage from "pages/error-page/ui/ErrorPage";

const routesConfig = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/about",
    element: <ErrorPage />,
  },
];

export default routesConfig;
