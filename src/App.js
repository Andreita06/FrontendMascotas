import './App.css';
//Import bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import AuthRouter from './routers/AuthRouter';
import UnauthRouter from './routers/UnauthRouter';
//Import components


// import { Route, Routes, useNavigate } from 'react-router';
// import PetData from './pages/private/PetData';
// import Home from './pages/public/Home';
// import { useState } from 'react';
// import Login from './components/Login';

// const usuario="admin"
// const password="123456"

function App() {
  

  // const [autorizado, setAutorizado] = useState(false);
  
  // let navigate = useNavigate();

  // const handleAuth =(usu,pass)=>{
  //   if (usu===usuario && pass===password){
  //     setAutorizado(true);
  //     navigate('/pet-data')

  //   }

  // }

 const {auth, handleAuth} = useContext(AuthContext);
     


  return (
    <div className="App">
      {/* <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/pet-data" element={<PetData autorizado={autorizado}/>} />

      </Routes> */}
     
      {auth? <AuthRouter/>:<UnauthRouter/>}


    </div>

  );
}

export default App;