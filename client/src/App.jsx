import {BrowserRouter as Router, Route,Routes, Redirect} from 'react-router-dom';
import './App.css';
import  { useReducer, useState, useEffect } from 'react';
import { Provider } from './components/Store/Context';
import { initialState, reducer } from './components/Store/userReduce';
import Home from './components/Home/Home'
import Patient from './components/Patient/Patient'
import AssignedPat from './components/Patient/AssignedPat';
import { SnackbarProvider } from 'notistack';


function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div className="App">
          <SnackbarProvider maxSnack={3}>
      <Provider value={{state,dispatch}}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} /> 
          <Route exact path='/Patient/:id' element={<Patient />} /> 
          <Route exact path='/Patients' element={<AssignedPat />} />
        </Routes>  
      </Router> 
      </Provider>
          </SnackbarProvider>
    </div>
  );
}

export default App;
