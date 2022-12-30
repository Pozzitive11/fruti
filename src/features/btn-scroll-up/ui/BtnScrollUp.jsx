import { useState } from 'react';
import { Button } from 'shared/ui/button/Button';
import { scrollUp } from 'assets';
import styles from './BtnScrollUp.module.scss';

function BtnScrollUp() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <>
      {visible && (
        <Button classes={styles.button} onClick={scrollToTop}>
          <img src={scrollUp} alt="Прокрутити вгору" />
        </Button>
      )}
    </>
  );
}

export default BtnScrollUp;
