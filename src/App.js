import React, { useState, useEffect } from 'react'
import './App.css';
import Login from './pages/login/Login';
export default function App() {

  const [state, setState] = useState(<Login/>)

  return (
    <div className="App">
      {state}
    </div>
  );
  
}


