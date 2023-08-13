import { useEffect, useState } from "react";
import { AdoptionFormValues } from "../interfaces/adoptionFormValues";
import { useParams } from "react-router-dom";
import { getPet } from "../services/petService";
import { postAdoptionForm } from "../services/adoptionService";
import { Pet } from "../interfaces/pet";

export function AdoptionForm() {
    const [formValues, setFormValues] = useState<AdoptionFormValues>({
        firstName: '',
        middleName: '',
        lastName: '',
        hasFencedYard: false,
        hasChildren: false,
        hasOtherPets: false,
        phoneNumber: '',
        email: '',
        aboutSelf: '',
      });

      const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
      const [pet, setPet] = useState<Pet | null>(null);

      const { id } = useParams();

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

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            setFormValues(prev => ({
                ...prev,
                [name]: (e.target as HTMLInputElement).checked,
            }));
        } else {
            setFormValues(prev => ({
                ...prev,
                [name]: value,
            }));
        }
    };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        postAdoptionForm(formValues);
        setFormSubmitted(true);
      };
    
      if (formSubmitted) {
        return <p>Thank you, one of our PetFinder team members will read the application and get back with you as soon as possible</p>;
      }

      return (
        <div className="AdoptionForm">
            <div className="row">
                <h1>Adoption form for: {pet?.name}</h1>
            </div>
        <div className="row">
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" className="form-control" id="firstName" name="firstName" value={formValues.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
            <label htmlFor="middleName">Middle Name</label>
            <input type="text" className="form-control" id="middleName" name="middleName" value={formValues.middleName} onChange={handleChange} />
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" name="lastName" value={formValues.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input 
          type="tel"
          className="form-control"
          id="phoneNumber"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleChange}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123-456-7890"
        />
        <small className="form-text text-muted">Format: 123-456-7890</small>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          pattern="\S+@\S+\.\S+"
        />
        <small className="form-text text-muted">Format: email@domain.com</small>
      </div>
          <div className="form-group">
            <label htmlFor="aboutSelf">About Yourself</label>
            <textarea className="form-control" id="aboutSelf" rows={3} name="aboutSelf" value={formValues.aboutSelf} onChange={handleChange}></textarea>
          </div>
          {pet?.animalType == 'dog' &&           <div className="form-check">
            <input className="form-check-input" type="checkbox" id="hasFencedYard" name="hasFencedYard" checked={formValues.hasFencedYard} onChange={handleChange} />
            <label className="form-check-label" htmlFor="hasFencedYard">
                Do you have a fenced yard?
            </label>
           </div> }

           <div className="form-check">
            <input className="form-check-input" type="checkbox" id="hasChildren" name="hasChildren" checked={formValues.hasChildren} onChange={handleChange} />
            <label className="form-check-label" htmlFor="hasChildren">
                Do you have children?
            </label>
           </div>
           <div className="form-check">
            <input className="form-check-input" type="checkbox" id="hasOtherPets" name="hasOtherPets" checked={formValues.hasOtherPets} onChange={handleChange} />
            <label className="form-check-label" htmlFor="hasOtherPets">
                Do you have other pets?
            </label>
           </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
            </div>
        </div>

      );
}