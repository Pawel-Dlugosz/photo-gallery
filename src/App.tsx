import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PhotoProvider } from "./contexts/PhotoContext";
import PhotoGallery from "./components/PhotoGallery";
import PhotoDetail from "./components/PhotoDetail";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PhotoProvider>
        <Routes>
          <Route path="/" element={<PhotoGallery />} />
          <Route path="/photos/:photoId" element={<PhotoDetail />} />
        </Routes>
      </PhotoProvider>
    </BrowserRouter>
  );
};

export default App;
