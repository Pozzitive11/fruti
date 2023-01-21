import styles from './Button.module.scss';
import cn from 'classnames';

export const Button = ({ classes, children, disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={cn(classes, styles.button)}
    >
      {children}
    </button>
  );
};
