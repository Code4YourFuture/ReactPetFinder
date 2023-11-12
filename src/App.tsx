import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { PetList } from './components/petList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PetDetails } from './components/petDetails';
import { PetAdoptionForm } from './components/petAdoptionForm';

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
