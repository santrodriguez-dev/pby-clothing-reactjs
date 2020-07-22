import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const apiUrl = 'https://localhost:44336/api/'

const getAllProducts = () => {
  return axios.post<any[]>(`${apiUrl}products`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const getAllArticles = () => {
  return axios.post<any[]>(`${apiUrl}articles`)
    .then(response => {
      return resolveResponse(response)
    })
    .catch(error => {
      console.log(error);
      toast.error(error.message);
    })
}

const resolveResponse = (response: AxiosResponse) => {
  if (response.status !== 200) return false
  if (!response.data) return false
  const data = response.data
  return data
}

export const PbyService = {
  getAllProducts,
  getAllArticles
}