import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { HomePage } from "pages/home-page";
import { AboutPage } from "pages/about-page";
import { ErrorPage } from "pages/error-page";
import { DeliveryPage } from "pages/delivery-page";

import { Layout } from "shared/ui/layout/Layout";
import { OrderPage } from "pages/order-page";

const REPO_NAME = "fruti";

function App() {
  return (
    <BrowserRouter basename={`/${REPO_NAME}/`}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route
            path="delivery"
            element={<DeliveryPage />}
          />
          <Route path="/order" element={<OrderPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
