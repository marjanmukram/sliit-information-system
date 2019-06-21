import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login'
/* import StudentSubmissionForm from './components/student/submissionForm'; */

function App() {
  return (
    <div className="App">
       <Login/> 
      {/* <StudentSubmissionForm /> */}
    </div>
  );
}

export default App;
