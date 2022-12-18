import styles from './AboutCard.module.scss';

export const AboutCard = ({ content, img, title, id }) => {
  return (
    <li key={id} className={styles.about__item}>
      <img src={img} alt={title} className={styles.about__item_img} />
      <h2 className={styles.about__item_title}>{title}</h2>
      <p className={styles.about__item_text}>{content}</p>
    </li>
  );
};
