import React from 'react';
import Nav from './pages/navigation/Nav';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/homepage/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/footer/Footer'

function App() {
  return (
    <>
     <Router>
     <Nav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
     </Routes>
     <Footer/>
     </Router>
    </>
  )
}

export default App;
