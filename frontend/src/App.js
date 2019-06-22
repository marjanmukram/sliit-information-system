import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import Admin from './components/admin/AdminHome';
import ViewCourses from './components/student/viewCourses';

function App() {
  return (
    <div className="App">
      <Admin />
    </div>
  );
}

export default App;
