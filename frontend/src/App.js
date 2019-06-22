import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './components/Homepage';
import Admin from './components/admin/CourseAdd'
import AppRouter from './routers/AdminRouter'

function App() {
  return (
    <Homepage/>
  );
}

export default App;
