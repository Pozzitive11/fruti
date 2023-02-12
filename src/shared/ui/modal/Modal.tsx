import { FC } from "react";

import styles from "./Modal.module.scss";
import cn from "classnames";

interface ModalProps {
  children?: React.ReactChild | React.ReactNode;
  visible: boolean;
  setVisible: (e: boolean) => void;
  classes: any;
}

export const Modal: FC<ModalProps> = ({
  children,
  visible,
  setVisible,
  classes,
}) => {
  const rootClasses = [styles.modal];

  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => setVisible(false)}
    >
      <div
        className={cn(classes, styles.modal__content)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
