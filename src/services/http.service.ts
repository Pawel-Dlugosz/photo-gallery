import axios, { AxiosResponse } from "axios";

export const get = async (url: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw new Error(`Error while making GET request to ${url}: ${error}`);
  }
};
