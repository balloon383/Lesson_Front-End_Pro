import React, { useState, useEffect } from 'react'
import './App.css';
import Login from './pages/login/Login';
export default function App() {

  const [state, setState] = useState('login')

  return (
    <div className="App">
      {state === 'login' ? <Login/> : <></>}
    </div>
  );
  
}


