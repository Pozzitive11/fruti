import * as yup from "yup";
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
export const validationSchema = yup.object().shape({
  secondName: yup.string().required("Введіть прізвище"),
  firstName: yup.string().required("Введіть ім'я"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Приберіть зайві символи")
    .phone("IN", false, "Введіть коректний номер телефону")
    .required(),
  address: yup.string().required("Введіть адресу"),
});
