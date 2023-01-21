import { Info } from "widgets/info";
import { delivery, cooperation } from "assets";
import cn from "classnames";

import styles from "./AboutPage.module.scss";

export const AboutPage = () => {
  return (
    <main className="container">
      <div className={styles.delivery}>
        <div className={cn(styles.payment__content, styles.content)}>
          <h2 className={cn(styles.payment__title, styles.title)}>
            Доставка овочів та фруктів до вашого дому
          </h2>
          <p className={cn(styles.payment__text, styles.text)}>
            Вітаємо вас! Наша місія - забезпечити кожну сім’ю свіжіми овачами та
            фруктами високої якості за доступними цінами. Вам бiльше не
            доведеться годинами розшукувати потрiбнi овочі та фрукти, стояти в
            чергах, а потім нести важкі пакунки. За вас це зробимо ми!
          </p>
        </div>
        <img
          width="486"
          height="450"
          src={delivery}
          alt="Доставка овочів та фруктів до вашого дому"
        />
      </div>
      <div className={styles.cooperation}>
        <div className={cn(styles.cooperation__content, styles.content)}>
          <h2 className={cn(styles.cooperation__title, styles.title)}>
            Завжди відкриті до співпраці
          </h2>
          <p className={cn(styles.cooperation__text, styles.text)}>
            Ми на постійній основі співпрацюємо з державними установами та
            комерційними організаціями. Якщо у вас є пропозиція ми з радістю
            розглянемо її. Напишіть нам на електронну адресу
            <a href="mailto:fruti.business@gmail.com">
              fruti.business@gmail.com
            </a>
          </p>
        </div>
        <img
          width="486"
          height="450"
          src={cooperation}
          alt="Завжди відкриті до співпраці"
        />
      </div>
      <Info />
    </main>
  );
};
