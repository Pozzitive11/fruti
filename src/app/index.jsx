import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "pages/home-page";
import { AboutPage } from "pages/about-page";
import { ErrorPage } from "pages/error-page";
import { DeliveryPage } from "pages/delivery-page";

import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { Layout } from "shared/ui/layout/ui/Layout";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
