import { createContext, useContext, useState, useMemo } from 'react';
import axios from '../../utils/axios';

// Crear el contexto
const AuthContext = createContext();

// Crear componente de Provider, State
export function AuthProvider({ children }) {
  // State
  const [auth, setAuth] = useState(false);

  const [errorAuth, setErrorAuth] = useState(false);

  const [spinning, setSpinning] = useState(false);

  const LoginAuth = async (datos) => {
    try {
      // TODO: api/login aun no creado en el backend
      // eslint-disable-next-line
      console.log('Login en Context:', datos);
      const respuesta = await axios.post('/api/login', datos);

      setSpinning(false);
      setAuth(respuesta.data);
      setErrorAuth(false);
    } catch (error) {
      setSpinning(false);
      // eslint-disable-next-line
      console.log(error);
      setErrorAuth(true);
    }
  };

  const Register = async (datos) => {
    try {
      // TODO: api/register aun no creado en el backend
      // eslint-disable-next-line
      console.log('Register en Context:', datos);
      // const res = await axios.post('/api/users', datos)
      // console.log(res.data);
    } catch (error) {
      // TODO: Mostrar mensajes enviados desde el backend
      const errorMessage = error.response.data;
      // eslint-disable-next-line
      console.log(errorMessage);
    }
  };

  const bringUsers = async () => {
    try {
      const res = await axios.get('/api/users');
      return res;
      // console.log("Res Res Res", res.data);
    } catch (error) {
      // eslint-disable-next-line
      console.log('Error bringing users', error);
      return null;
    }
  };

  const value = useMemo(() => ({
    // States
    auth,
    errorAuth,
    spinning,
    // Funciones
    setAuth,
    LoginAuth,
    setSpinning,
    Register,
    bringUsers,
  }));

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Crear custom Hook que retorna el contexto, si hay
export const useStateAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useStateAuth must be used within a AuthProvider');
  }

  return context;
};
