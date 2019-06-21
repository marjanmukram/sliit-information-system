import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './components/Homepage';
import Admin from './components/admin/AdminHome'

function App() {
  return (
    <Admin/>
  );
}

export default App;
