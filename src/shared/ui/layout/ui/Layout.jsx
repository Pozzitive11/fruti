import { Link, Outlet } from "react-router-dom";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
