import styles from './Input.module.scss';
import cn from 'classnames';

export const Input = ({ classes, ...props }) => {
  return <input {...props} className={cn(classes, styles.input)} />;
};
