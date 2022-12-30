import styles from './Button.module.scss';
import cn from 'classnames';

export const Button = ({ classes, children, ...props }) => {
  return (
    <button {...props} className={cn(classes, styles.button)}>
      {children}
    </button>
  );
};
