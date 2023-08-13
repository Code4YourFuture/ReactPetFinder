import axios from "axios";
import { Pet } from "../interfaces/pet";

const apiURL = process.env.REACT_APP_API_URL + "pets" || "";

export const getPets = async (searchTerm?: string): Promise<Pet[]> => {
    let response;
    if (searchTerm) {
      response = await axios.get(`${apiURL}?q=${searchTerm}`);
    } else {
      response = await axios.get(apiURL);
    }
    return response.data as Pet[];
  };

export const getPet = async (id: number): Promise<Pet> => {
  const response = await axios.get(`${apiURL}/${id}`);
  return response.data as Pet;
};

export const createPet = async (newPet: Omit<Pet, 'id'>): Promise<Pet> => {
  const response = await axios.post(apiURL, newPet);
  return response.data as Pet;
};

export const updatePet = async (id: number, updatedPet: Partial<Pet>): Promise<Pet> => {
  const response = await axios.put(`${apiURL}/${id}`, updatedPet);
  return response.data as Pet;
};

export const deletePet = async (id: number): Promise<void> => {
  await axios.delete(`${apiURL}/${id}`);
};

