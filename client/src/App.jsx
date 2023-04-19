import {BrowserRouter as Router, Route,Routes, Redirect} from 'react-router-dom';
import './App.css';
import  { useReducer, useState, useEffect } from 'react';
import { Provider } from './components/Store/Context';
import { initialState, reducer } from './components/Store/userReduce';
import Home from './components/Home/Home'
import Patient from './components/Patient/Patient'


function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div className="App">
      <Provider value={{state,dispatch}}></Provider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} /> 
          <Route exact path='/Patient/:id' element={<Patient />} /> 
        </Routes>  
      </Router> 
    </div>
  );
}

export default App;
