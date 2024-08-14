import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OneBox from './pages/OneBox';
import { Login } from './pages/Login.jsx';
import NoMails from './components/NoMails';
import Email from './components/Email';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Router>
      <div className={isDarkMode ? "dark" : ""}> 
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Login />}></Route>
          <Route path='/onebox' element={<OneBox setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />}></Route>
          <Route path='/email' element={<Email />}></Route>
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
