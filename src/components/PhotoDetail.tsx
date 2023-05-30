import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PhotoI } from "../interfaces/photo.interface";
import { PhotoContext } from "../contexts/PhotoContext";
import Header from "./Header";

const PhotoDetail: React.FC = () => {
  const { photos } = useContext(PhotoContext);
  const { photoId } = useParams<{ photoId: string }>();

  const photo = photoId
    ? photos.find(({ id }) => id === parseInt(photoId))
    : undefined;

  if (!photo) {
    return (
      <div className="text-red-700 text-center p-6">
        Photo ID: "{photoId}" not found
      </div>
    );
  }

  return (
    <div>
      <Header>{photo.title}</Header>
      <div className="p-6">
        <img src={photo.url} alt={photo.title} className="rounded-md m-auto" />
      </div>
    </div>
  );
};

export default PhotoDetail;
