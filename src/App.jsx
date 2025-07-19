import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import "./App.css";
import EligibiltyForm from './pages/EligibiltyForm';
import Result from './pages/Result';
import About from './pages/About';
import Signup from './pages/signup';  
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/eligibiltyform' element={<EligibiltyForm />} />
      <Route path='/result' element={<Result />}></Route>
      <Route path='/about' element={<About />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

    </Routes>
      
    </>
  )
}

export default App
