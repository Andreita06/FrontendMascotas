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
import Logo from './components/Logo';



function App() {



  return (
    <div className="App">


      <Dashboard />
      <Logo />

      <Carousel />
      <Container>
        <Row >
          <Col ><LoginVeterinarios /></Col>
          <Col ><Login /></Col>
        </Row>
      </Container>

      <Footer />


    </div>

  );
}

export default App;