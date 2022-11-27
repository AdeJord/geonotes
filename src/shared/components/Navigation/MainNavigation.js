import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import Header from "./Header";
import MenuIcon from "@mui/icons-material/Menu";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from '../../../UiElements/Backdrop'

import "./MainNavigation.css";

const useStyles = makeStyles({
  main: {
    background: "yellow",
    height: "600px",
  },

  title: {
    background: "grey",
    textDecoration: "none",
    color: "black",
  },

  menuButton: {
    display: "flex",
    background: "transparent",
    flexDirection: "column",
    position: "absolute",
    right: "0",
    paddingBottom: "1vw",
    top: "0",
    margin: "15px",
    border: "none",
    cursor: "pointer",
    ['@media (min-width:768px)']: { // eslint-disable-line no-useless-computed-key
      display: 'none'
    },
    "& svg": {
      fontSize: "calc 25px + 2vw",
    },
  },
});



const MainNavigation = (props) => {
  const classes = useStyles();
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const ToggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <React.Fragment>
      {drawerIsOpen &&
      <Backdrop onClick={ToggleDrawer}/>}
      {drawerIsOpen &&
        <SideDrawer show={drawerIsOpen} onClick={ToggleDrawer}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer> 
      }
      <Header className={classes.main}>
        <Link to="/" className={classes.title}>
          GeoNotes
        </Link>
        <button className={classes.menuButton} onClick={ToggleDrawer}>
          <MenuIcon />
          Menu
        </button>
      </Header>
      <nav className="main-navigation__header-nav">
        <NavLinks />
      </nav>
    </React.Fragment>
  );
};

export default MainNavigation;
