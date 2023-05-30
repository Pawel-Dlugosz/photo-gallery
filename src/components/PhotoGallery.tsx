import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PhotoContext } from "../contexts/PhotoContext";
import Photo from "./Photo";
import Header from "./Header";

const PhotoGallery: React.FC = () => {
  const { photos } = useContext(PhotoContext);

  return (
    <div>
      <Header>Photo Gallery</Header>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl m-auto p-4">
        {photos.map((photo) => (
          <li key={photo.id}>
            <Link to={`/photos/${photo.id}`} key={photo.id}>
              <Photo photo={photo} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoGallery;
