import { useEffect, useState } from "react";
import { getPets } from "../services/petService";
import { Link } from "react-router-dom";
import { Pet } from "../interfaces/pet";

export function PetList() {
    const [pets, setPets] = useState<Pet[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
    getPets(searchTerm)
      .then((pets) => {
        setPets(pets);
      })
      .catch((error) => {
        console.error('Error fetching pet data', error);
      });
  }, [searchTerm]);
  
    return (
      <div className="PetList">
        <div className="row mt-4">
          <div className="col-2"></div>
          <div className= "col-8">
          <input
        className="form-control"
        type="search"
        placeholder="Search by name or breed"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
          </div>
          <div className="col-2"></div>
        </div>
        <div className="row mt-4">
        {pets.map((pet) => (
          <div className="col-md-4" key={pet.id}>
            <div className="card mb-4">
            <img src={`/img/${pet.image}`} className="card-img-top" alt={pet.name} />
              <div className="card-body">
                <h5 className="card-title">{pet.name} ({pet.breed})</h5>
                <p className="card-text">{pet.description}</p>
                <Link to={`/adopt/${pet.id}`} className="btn btn-primary">Adopt me!</Link>
                <Link to={`/details/${pet.id}`} className="btn btn-secondary ml-2">Details</Link>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
}