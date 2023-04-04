import {BrowserRouter as Router, Route,Routes, Redirect} from 'react-router-dom';
import './App.css';
import React, {useEffect} from 'react';
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} /> 
          
        </Routes>  
      </Router> 
    </div>
  );
}

export default App;
