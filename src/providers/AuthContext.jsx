import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

import toast from "react-hot-toast";
import ToastStyle from "../components/ToastStyle/styles";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [tech, setTech] = useState([]);
  const [loading, setLoading] = useState(true);

  const signRegister = async (data) => {
    try {
      await api.post("/users", data);

      toast.success("Conta criada com sucesso!", ToastStyle);
      navigate("/login", { replace: true });
    } catch {
      toast.error("Ops! Já existe um cadastro com este email.", ToastStyle);
    }
  };

  const signIn = async (data) => {
    try {
      const response = await api.post("/sessions", data);
      const { user: userResponse, token } = response.data;

      localStorage.setItem("@user:token", token);
      localStorage.setItem("@user:id", userResponse.id);

      setUser(userResponse);
      toast.success("Bem vindo(a)!", ToastStyle);
      navigate("/dashboard", { replace: true });
    } catch {
      toast.error("Email e/ou senha inválidos.", ToastStyle);
    }
  };

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@user:token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get(`/profile`);
          setUser(data);
          setTech(data.techs);
        } catch (error) {
          console.log(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signRegister, setTech, user, loading, tech }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
