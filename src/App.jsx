import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState } from "react";
import photos from "../public/photos.json"
import MyContext from "./MyContex";
import 'bootstrap/dist/css/bootstrap.min.css';

import Favorites from "./views/Favorites";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

//const PHOTO_URL = "/photos.json";

const App = () => {
  const [data, setData]=useState(photos.photos);
  const sharedData={data ,setData};

  return (
    <div>
        <MyContext.Provider value={sharedData}>
          <Navbar />
          <Routes>
            <Route
              path="/desafio_useContext"
              element={<Home />}
            />
            <Route
              path="/desafio_useContext/favoritos"
              element={<Favorites />}
            />
            <Route
              path="*"
              element={<NotFound/>}
            />
          </Routes>
        </MyContext.Provider>
    </div>
  );
};
export default App;
