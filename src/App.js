
import { Route, Routes } from 'react-router-dom';
import './App.css';
import "../src/style.css"
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
;

function App() {
  return (
    <>

      <Header/>
      <Routes>

    <Route exact path='/' element={<Home/>}/>  
    <Route exact path='/about' element={<About/>}/>  
    <Route path='/cart' element={<Cart />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<SignUp />} />
    
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
