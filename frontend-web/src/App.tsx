import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from 'Routes';
import './App.scss';
import './core/assets/styles/custom.scss';


function App() {
  return (
    <div>
      <ToastContainer />
      <Routes />
    </div>
  );
}

export default App;
