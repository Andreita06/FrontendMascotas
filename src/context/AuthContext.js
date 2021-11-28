const { createContext, useState } = require("react");
//Contexto
const AuthContext = createContext();

//Proveedor del contexto con props recibidas
const AuthProvider = ({children})=>{
    //Estado 
    const [auth, setAuth] = useState(false);
    
    //manejador de eventos, autenticacionn
    const handleAuth=(user, password)=>{
        console.log('LLamando a handle auth de AuthContext')
        if(user ==="admin" && password === "123456"){
          setAuth(true);  
        }else{
            alert('Acceso denegado')
        }
        
    }

    const data= {auth, handleAuth};

    //jsx que devuelve con valores y propiedades
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
export {AuthProvider};
export default AuthContext;