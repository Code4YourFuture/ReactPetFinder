import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { PetList } from './components/PetList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PetDetails } from './components/PetDetails';
import { PetAdoptionForm } from './components/PetAdoptionForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PetList></PetList>}></Route>
          <Route path="/details/:id" element={<PetDetails />}></Route>
          <Route path="/adoptions/:id" element={<PetAdoptionForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
