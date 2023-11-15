import './App.css'
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Partnership from './pages/Partnership';
import Footer from './components/Footer';
import Membership from './pages/Membership';

function App() {

  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to='/login' />
  }

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to='/' />
  }

  return (
  
    <div>
    <Navbar />


    <Routes>      
        <Route element={<LoggedIn />}>

        <Route path ="/" element={<HomePage/>}/>
        <Route path ="/partnership" element={<Partnership/>}/>
        <Route path ="/membership" element={<Membership/>}/>

        </Route>

        <Route element={<NotLoggedIn />}>
          
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

        </Route>


      </Routes>

      <Footer/>

    </div>
  )
}

export default App
