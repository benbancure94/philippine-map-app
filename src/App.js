import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      {/* <div id="ezoic-pub-ad-placeholder-110"> </div> */}
    <BrowserRouter basename='/philippine-map-app'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<Home />} />
          <Route path="map/metro-manila" element = {<MapPage mapOfPlace={"Metro Manila"}/>} />
          <Route path="map/rizal" element = {<MapPage mapOfPlace={"Rizal"}/>} />
          <Route path="map/bulacan" element = {<MapPage mapOfPlace={"Bulacan"}/>} />
          <Route path="map/cavite" element = {<MapPage mapOfPlace={"Cavite"}/>} />
          <Route path="map/laguna" element = {<MapPage mapOfPlace={"Laguna"}/>} />
          <Route path="map/batangas" element = {<MapPage mapOfPlace={"Batangas"}/>} />
          <Route path="map/quezon" element = {<MapPage mapOfPlace={"Quezon"}/>} />
          <Route path="map/nueva-ecija" element = {<MapPage mapOfPlace={"Nueva Ecija"}/>} />
          <Route path="map/nueva-vizcaya" element = {<MapPage mapOfPlace={"Nueva Vizcaya"}/>} />
          <Route path="map/isabela" element = {<MapPage mapOfPlace={"Isabela"}/>} />
          <Route path="map/cagayan" element = {<MapPage mapOfPlace={"Cagayan"}/>} />
          <Route path="map/marinduque" element = {<MapPage mapOfPlace={"Marinduque"}/>} />
          <Route path="map/pangasinan" element = {<MapPage mapOfPlace={"Pangasinan"}/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> 
      {/*<div className="Map-container">
        <div className="Map-padding" ref={divRef}>
        <Map/>
        </div>
        <div className="save-image-button" onClick={downloadJpg}>Save Image</div>
      </div>
  <AdsComponent dataAdSlot='8658257981' />*/}
  </div>
  );
}

export default App;