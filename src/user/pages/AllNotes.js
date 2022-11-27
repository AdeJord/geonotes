import React from "react";

import MapView from "../../shared/components/Map";

const AllNotes = (props) => {
  return (
    <>
  <div className="center">Everyones Notes</div>
  <div
   className="center"
   style={{
    fontSize: "10px",
    fontStyle: "italic"
  }}
   >This should render everyones notes, maybe filter with the layerscontrol?</div>
  <div className="center" style={{    
    fontSize: "10px",
    fontStyle: "italic",
    textDecoration: "underline"
    }}
    >Same as PlaceList on Udemy
    </div>
  <MapView />
  </>
  )
};


export default AllNotes;
