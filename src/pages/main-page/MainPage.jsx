import BtnScrollUp from 'features/btn-scroll-up/ui/BtnScrollUp';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import { Product } from 'widgets/product/ui/Product';
import styles from './MainPage.module.scss';

function MainPage() {
  return (
    <div className={styles.mainPage}>
      <Header />
      <main className="container">
        <Product />
      </main>
      <Footer />
      <BtnScrollUp />
    </div>
  );
}

export default MainPage;
