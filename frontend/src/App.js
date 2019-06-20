import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login'
import fileUpload from './components/student/fileUpload'
import FileUpload from './components/student/fileUpload';

function App() {
  return (
    <div className="App">
      <Login/>
      <FileUpload />
    </div>
  );
}

export default App;
