import React, { createContext, useState, useEffect, ReactNode } from "react";
import { PhotoI } from "../interfaces/photo.interface";
import { getPhotos } from "../services/photo.service";

interface PhotoContextValue {
  photos: PhotoI[];
}

export const PhotoContext = createContext<PhotoContextValue>({
  photos: [],
});

export const PhotoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [photos, setPhotos] = useState<PhotoI[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const fetchedPhotos = await getPhotos();
      setPhotos(fetchedPhotos);
    };

    fetchPhotos();
  }, []);

  return (
    <PhotoContext.Provider value={{ photos }}>{children}</PhotoContext.Provider>
  );
};
