import axios from 'axios';
import { AdoptionFormValues } from '../interfaces/adoptionFormValues';

const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export const postAdoptionForm = async (formValues: AdoptionFormValues): Promise<any> => {
  const response = await axios.post(`${apiURL}adoptions`, formValues);
  return response.data;
};