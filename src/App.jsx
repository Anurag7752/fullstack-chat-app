import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import { useAuthStore } from './store/useAuthStore'
import { useThemeStore } from './store/useThemeStore';
import { Loader } from 'lucide-react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import SettingPage from './pages/SettingsPage';
import { Toaster } from "react-hot-toast";

function App() {
  const {authUser, checkAuth, isCheckingAuth, olineUsers} =  useAuthStore();
  const {theme} = useThemeStore();

  console.log({olineUsers});

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({authUser});

  if(isCheckingAuth && !authUser)
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader className='size-10 animate-spin'/>
      </div>
  );
  return (
   <div data-theme={theme}>
    <Navbar/>

    <Routes>
      <Route path='/' element={authUser ? <HomePage/> : <Navigate to="/login"/>}/>
      <Route path='/signup' element={!authUser ? <SignUpPage/> : <navigator to="/"/>}/>
      <Route path='/login' element={!authUser ? <LoginPage/> : <Navigate to="/"/>}/>
      <Route path='/settings' element={<SettingPage/>}/>
      <Route path='/profile' element={authUser ? <profilePage/> : <navigator to="/login"/>}/>
    </Routes>
    
    <Toaster/>
   </div>
  );
};

export default App
