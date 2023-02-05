import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { HeaderOrder } from "widgets/header-order";

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
