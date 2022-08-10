import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Deve ser um email").required("Campo obrigatório"),
  password: yup
    .string()
    .min(8, "No mínimo 8 caracteres")
    .required("Campo obrigatório")
    .matches(
      "(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])",
      "Deve conter letra maiúscula, minúscula e caractere especial"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Confirmação deve ser igual a senha")
    .required("Campo obrigatório"),
  bio: yup.string().required("Campo obrigatório"),
  contact: yup.string().required("Campo obrigatório"),
});

export default schema;
