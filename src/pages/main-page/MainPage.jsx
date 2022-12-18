import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';
import Product from 'widgets/product/ui/Product';

function MainPage() {
  return (
    <div>
      <Header />
      <div className="container">
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
