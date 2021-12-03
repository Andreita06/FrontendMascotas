const { createContext, useState } = require("react");
//Contexto
const AuthContext = createContext();

//Proveedor del contexto con props recibidas
const AuthProvider = ({ children }) => {
    //Estado 
    const [auth, setAuth] = useState(false);

    //Manejador de registro
    const handleRegister = (objUser) => {
        //realizar peticion al server para registrar un usuario, recibe url y el objeto
        //apilogin permite que cualquier cambio se haga en eljs
            fetch('http://localhost:3000/usuario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                 body: JSON.stringify(objUser)
            }).then(async (resp)=>{
                if(resp.status=== 201){
                    let json= await resp.json();
                    let token = json.token;
                    //espacio de memoria en el navegador donde se puede guardar info.Para persistencia. Nombre y valor
                    localStorage.setItem('token', token);
                    // setAuth(true);
                    console.log(json)
                }else{
                    alert("Credentials invalid");
                }


            }).catch(error=>{
                console.log(error)
            });
    };

    //manejador de eventos, autenticacionn
    const handleAuth = (user, password) => {
        console.log('LLamando a handle auth de AuthContext')
        if (user === "admin" && password === "123456") {
            setAuth(true);
        } else {
            alert('Acceso denegado')
        }

    }

    const signOut = () => {
        setAuth(false);
    }

    const data = { auth, handleAuth, signOut, handleRegister };

    //jsx que devuelve con valores y propiedades
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
export { AuthProvider };
export default AuthContext;