import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPet } from '../services/petService';
import { Pet } from '../interfaces/pet';

export function PetDetails(){
    const { id } = useParams();
    const [pet, setPet] = useState<Pet | null>(null);
  
    useEffect(() => {
        if(id != undefined){
            getPet(Number(id))
            .then((response) => {
              setPet(response);
            })
            .catch((error) => {
              console.error('Error fetching pet data', error);
            });
        }
    }, [id]);
  
    return (
      <div className="container mt-5">
        {pet && (
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <img src={`/img/${pet.image}`} className="img-fluid" alt={pet.name} />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{pet.name}</h5>
                  <p className="card-text">{pet.breed} - {pet.isBoy ? 'Boy' : 'Girl'}</p>
                  <p className="card-text">{pet.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
