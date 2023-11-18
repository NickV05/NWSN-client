import './App.css'
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import Partnership from './pages/Partnership';
import Footer from './components/Footer';
import Membership from './pages/Membership';
import NewsPage from './pages/NewsPage';
import { useState, useEffect } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to='/login' />
  }

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to='/' />
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
  
    <div>
    <Navbar />

    <Routes>      
        <Route element={<LoggedIn />}>

        <Route path ="/" element={<HomePage/>}/>
        <Route path ="/partnership" element={<Partnership/>}/>
        <Route path ="/membership" element={<Membership/>}/>
        <Route path ="/news" element={<NewsPage/>}/>

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
