import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import {useEffect, useState} from "react";

export default function Maps(props) {
    const [map , setMap] = useState(/** @type google.maps.Map*/ (null))
    
    let center = props.center;
    let key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    


  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: key,
  });

  if (!isLoaded) {
    return (
      <>
        <h1>Loading...</h1>
        <p>Map is loading...</p>
      </>
    );
  }


  return (
    <div className="section__maps">
      <div className="mapControl">
        <button className="button-28" onClick={() => map.panTo(center)}>Center</button>
        <button className="button-28">Button 2</button>
        <input />
        <button className="button-28">Button 3</button>
        <button className="button-28">Button 4</button>
      </div>
      <GoogleMap
        center={center}
        zoom={10}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          disableDefaultUI: true,
        }}
        onLoad={(map) => {
            setMap(map);
        }}
      >
      {props.restaurants.map((restaurant) => (
        <Marker key={restaurant.id} position={{lat: restaurant.geometry.location.lat, lng: restaurant.geometry.location.lng}} />
        ))}
      </GoogleMap>
    </div>
  );
}
