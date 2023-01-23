import { useEffect } from "react";
import BtnScrollUp from "features/btn-scroll-up/ui/BtnScrollUp";
import { Main } from "widgets/main/ui/Main";
// import styles from "./HomePage.module.scss";

import { useDispatch } from "react-redux";
import { getProductsRedux } from "app/store/productsSlice";

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsRedux());
  }, [dispatch]);


  return (
    <>
      <Main />
      <BtnScrollUp />
    </>
  );
};
