import React from "react";
import toast from "react-hot-toast";
import { createContext, useEffect, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

import { ToastError, ToastSuccess } from "../components/ToastStyle/styles";
import { IUserRegister } from "../components/FormRegister";
import { IUserLogin } from "../components/FormLogin";

export interface ChildrenProps {
  children: ReactNode;
}

interface IAuthContext {
  signRegister: (data: IUserRegister) => Promise<void>;
  signIn: (data: IUserLogin) => Promise<void>;
  setTech: React.Dispatch<React.SetStateAction<ITech[]>>;
  loading: boolean;
  user: IUser;
  tech: ITech[];
}

export interface ITech {
  id: string;
  title: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

interface IUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  avatar_url: string;
  techs: ITech[];
  created_at: Date;
  updated_at: Date;
}

interface IResponseSessions {
  user: IUser;
  token: string;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: ChildrenProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>({} as IUser);
  const [tech, setTech] = useState<ITech[]>([] as ITech[]);
  const [loading, setLoading] = useState(true);

  const signRegister = async (data: IUserRegister) => {
    try {
      await api.post("/users", data);

      toast.success("Conta criada com sucesso!", ToastSuccess);
      navigate("/login", { replace: true });
    } catch {
      toast.error("Ops! Já existe um cadastro com este email.", ToastError);
    }
  };

  const signIn = async (data: IUserLogin) => {
    try {
      const response = await api.post<IResponseSessions>("/sessions", data);
      const { user: userResponse, token } = response.data;

      localStorage.setItem("@user:token", token);
      localStorage.setItem("@user:id", userResponse.id);

      setUser(userResponse);
      toast.success("Bem vindo(a)!", ToastSuccess);
      navigate("/dashboard", { replace: true });
    } catch {
      toast.error("Email e/ou senha inválidos.", ToastError);
    }
  };

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@user:token");

      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;

          const { data } = await api.get<any>("/profile");
          setUser(data);
          setTech(data.techs);
          navigate("/dashboard", { replace: true });
        } catch {
          localStorage.clear();
          navigate("/login", { replace: true });
        }
      }
      setLoading(false);
    }
    loadUser();
  }, [navigate]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        tech,
        signIn,
        signRegister,
        setTech,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
