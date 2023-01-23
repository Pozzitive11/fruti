import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";
import { HeaderOrder } from "widgets/headerOrder/ui/HeaderOrder";

export const Layout = () => {
  const location = useLocation();

  console.log("pathname", location.pathname);
  return (
    <>
      {location.pathname === "/order" ? <HeaderOrder /> : <Header />}
      <Outlet />
      <Footer />
    </>
  );
};
