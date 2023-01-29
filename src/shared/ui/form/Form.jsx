// import styles from "./Form.module.scss";

export const Form = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};
