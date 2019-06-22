import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './components/Homepage';
<<<<<<< HEAD
import Admin from './components/admin/CourseAdd'
import AppRouter from './routers/AdminRouter'

function App() {
  return (
    <Homepage/>
=======
import Admin from './components/admin/AdminHome'
/* import ViewCourses from './components/student/viewCourses';  */

function App() {
  return (
    <Admin/>
         /*  <ViewCourses /> */
>>>>>>> 42f47d436ead4cb0f217dd9a26a64ba3c05015c9
  );
}

export default App;
