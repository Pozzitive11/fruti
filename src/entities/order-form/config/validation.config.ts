import * as yup from "yup";

export const validationSchema = yup.object().shape({
  secondName: yup.string().required("Введіть прізвище"),
  firstName: yup.string().required("Введіть ім'я"),
  phone: yup
    .string()
    .phone("IN", false, "Введіть коректний номер телефону")
    .required(),
  address: yup.string().required("Введіть адресу"),
});
