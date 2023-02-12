import { FC } from "react";

import styles from "./Input.module.scss";
import cn from "classnames";

interface InputProps {
  classes: any;
  type?: string;
  name?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  defaultChecked?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export const Input: FC<InputProps> = ({
  classes,
  ...props
}) => {
  return (
    <input
      {...props}
      className={cn(classes, styles.input)}
    />
  );
};
