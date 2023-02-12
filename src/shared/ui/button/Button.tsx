import cn from "classnames";
import React, { FC } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  classes?: string;
  disabled?: boolean;
  children?: React.ReactChild | React.ReactNode;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  type?: string;
}

export const Button: FC<ButtonProps> = ({
  classes,
  disabled,
  children,
  type,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      {...props}
      disabled={disabled}
      className={cn(classes, styles.button)}
    >
      {children}
    </button>
  );
};
