import React from "react";
import MapView from "../../shared/components/Map";
import { userMarkers } from "./../../shared/components/data";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  main: {
    textAlign: "center",
  },
  small: {
    fontSize: "12px",
    textAlign: "center",
    fontStyle: "italic",
    textDecoration: "underline"
  }
});

const MyNotes = (props) => {
  const classes = useStyles();
  

  console.log(userMarkers.length);

  if (userMarkers.length === 0) {
    return (
      <div className={classes.main}>
        <h2>You haven't added any notes yet. Try adding one?</h2>
      </div>
    );
  }

  return (
    <>
      <div className="center">My Notes works</div>
      <div
        className={classes.small}>
        Same as PlaceItem on Udemy
      </div>
      <MapView 
      creator = 'Ade'/>
    </>
  );
};

export default MyNotes;
