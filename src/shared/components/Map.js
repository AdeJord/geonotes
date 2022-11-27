import React, { useState, useEffect } from "react";
import {
  MapContainer,
  LayersControl,
  Circle,
  TileLayer,
  FeatureGroup,
  Marker,
  useMap,
  Popup,
  LayerGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./styles.css";
import "../../user/pages/home.css";
// import AddNote from "./AddNote";
import { userMarkers } from "./data";
import icon from "./constants";
import L from "leaflet";

//MAIN FUNCTION
export default function MapView(props) {
  const center = [52.7805192, -2.0256701];

  // This is Nicks code to map the creators
  const creators = [...new Set(userMarkers.map((marker) => marker.creator))];
  const data = creators.map((creator) => {
    return {
      creator,
      places: userMarkers.filter((marker) => marker.creator === creator),
    };
  });


  // FIND LOCATION
  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const [bbox, setBbox] = useState([]);

    const map = useMap();

    // sets up first render? (I think)
    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
        const radius = e.accuracy;
        const circle = L.circle(e.latlng, radius);
        circle.addTo(map);
        setBbox(e.bounds.toBBoxString().split(","));
      });
    }, [map]);

    //returns position on the map
    return position === null ? null : (
      <Marker position={position} icon={icon}>
        <Popup>
          You are here. <br />
        </Popup>
      </Marker>
    );
  }

  const addMarker = (marker) => {
     
    //if the creators name is the same as the creator in the url, 
    //then render the marker, if not,
     
    return (
      <Marker position={marker.coordinates} icon={icon} key={marker._id}>
        <Popup>
          <h3>{marker.creator}</h3>
          <h5>{marker.placeName}</h5>
          <p>{marker.note}</p>
        </Popup>
      </Marker>
    );
  };

  return (
    <MapContainer
      className="map"
      center={center}
      zoom={10}
      style={{ width: "100%", height: "100vh" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* This is Nicks method for returning the markers from the creators */}
      {data.map((creator) => {
        return creator.places.map((place) => {
          return addMarker(place);
        });
      })}
      <LocationMarker />
    </MapContainer>
  );
}
