import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DetailsPage from './components/DetailsPage/DetailsPage';
function App() {
  const navigate = useNavigate();
  return (
        <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/app" element={<MainPage />} />
          <Route path="/app/login" element={<LoginPage/>} />
          <Route path="/app/register" element={<RegisterPage />} />
          <Route path="/app/product/:productId" element={<DetailsPage/>} />
        </Routes>
        </>
  );
}
export default App;