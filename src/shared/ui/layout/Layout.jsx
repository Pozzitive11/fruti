import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "widgets/layouts/footer";
import { Header } from "widgets/layouts/header";
import { HeaderOrder } from "widgets/layouts/header-order";

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/order" ? (
        <>
          <HeaderOrder />
          <Outlet />
        </>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};
