import './App.css';
//Import bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
//Import components

import Login from './components/Login';
import LoginVeterinarios from './components/LoginVeterinarios';
import Carousel from './components/Carousel';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import logo from './logo.png';



function App() {

  

  return (
    <div className="App"> 
 

    <Dashboard/>
      <Row>   
        <Col><img src={logo} className="App-logo1"/></Col>
      </Row>
      <Row>
      <Carousel/>
      </Row>    
      <Row>
      <Col><LoginVeterinarios/></Col>
      <Col><Login/></Col>
      </Row>
      <Footer/>

     
        </div>

);
}

export default App;