import styles from './Modal.module.scss';
import cn from 'classnames';


export const Modal = ({ children, visible, setVisible, classes }) => {
  const rootClasses = [styles.modal];

  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className={cn(classes, styles.modal__content)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
