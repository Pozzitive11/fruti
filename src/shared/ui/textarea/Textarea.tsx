import styles from "./Textarea.module.scss";
import cn from "classnames";
import { FC } from "react";

interface TextareaProps {
  children?: React.ReactNode;
  classes: any;
  placeholder?: string;
};

export const Textarea: FC<TextareaProps> = ({
  children,
  classes,
  ...props
}) => {
  return (
    <textarea
      {...props}
      className={cn(classes, styles.textarea)}
    >
      {children}
    </textarea>
  );
};
