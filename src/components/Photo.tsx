import React from "react";
import { PhotoI } from "../interfaces/photo.interface";

interface PhotoProps {
  photo: PhotoI;
}

const Photo: React.FC<PhotoProps> = ({ photo }) => {
  return (
    <div>
      <img
        src={photo.thumbnailUrl}
        alt={photo.title}
        className="w-full rounded-md"
      />
      <p className="mt-2">{photo.title}</p>
    </div>
  );
};

export default Photo;
