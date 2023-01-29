import styles from "./Textarea.module.scss";
import cn from "classnames";

export const Textarea = ({ children, classes, ...props }) => {
  return (
    <textarea {...props} className={cn(classes, styles.textarea)}>{children}</textarea>
  );
};
