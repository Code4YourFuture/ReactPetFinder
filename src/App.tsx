import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PetList } from './components/petList';
import { Header } from './components/header';
import { PetDetails } from './components/petDetails';
import { AdoptionForm } from './components/adoptionForm';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<PetList />} />
          <Route path="/details/:id" element={<PetDetails />} />
          <Route path="/adopt/:id" element={<AdoptionForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
