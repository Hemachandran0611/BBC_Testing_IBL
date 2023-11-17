import axios, { AxiosResponse } from 'axios';

//helper funtion to return API response
export const apiClient = {
  async get(url: string): Promise<AxiosResponse> {
    return axios.get(url);
  }
};
