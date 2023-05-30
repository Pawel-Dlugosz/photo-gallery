import { PhotoI } from "../interfaces/photo.interface";
import { get } from "./http.service";

export const getPhotos = async (): Promise<PhotoI[]> => {
  try {
    const response = await get(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    return response.data as PhotoI[];
  } catch (error) {
    console.error("Error while fetching photos:", error);
    return [];
  }
};
