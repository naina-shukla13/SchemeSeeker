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
import Dashboard from './pages/Dashboard';
import AllSchemes from './pages/Schemes';
import AdminPanel from './pages/Admin';
import AdminRoute from './components/ProtectedRoute';


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
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/home' element={<Home />} />
      <Route path='/schemes' element={<AllSchemes/>} />
      <Route path='/admin' element={<AdminRoute><AdminPanel /></AdminRoute>} />

    </Routes>
      
    </>
  )
}

export default App
