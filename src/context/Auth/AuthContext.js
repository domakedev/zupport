import { createContext, useContext, useState } from "react";
import axios from "../../utils/axios"


//Crear el contexto
const AuthContext = createContext()



//Crear componente de Provider, State
export const AuthProvider = ({children}) => {

  //State
  const [auth, setAuth] = useState(false)

  const [errorAuth, setErrorAuth] = useState(false)

  const [spinning, setSpinning] = useState(false)

  const Login = async (datos) => {

    try {

      const respuesta = await axios.post('/api/login', datos)

      setSpinning(false)
      setAuth(respuesta.data)

    } catch (error) {
      setSpinning(false)
      console.log(error);
      setErrorAuth(true)
    }
  }

  return (
    <AuthContext.Provider value={{
      //States
      auth,
      errorAuth,
      spinning,
      //Funciones
      setAuth,
      Login,
      setSpinning
    }}>
      {children}
    </AuthContext.Provider>
  )
}


//Crear custom Hook que retorna el contexto, si hay
export const useStateAuth = () =>{

  const context = useContext(AuthContext);

  if (context === undefined) {
      throw new Error("useStateAuth must be used within a AuthProvider");
    }

    return context;
}





