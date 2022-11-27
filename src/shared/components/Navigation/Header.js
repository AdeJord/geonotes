import React from "react";
import { makeStyles } from '@mui/styles'

// import "./Header.css";


const useStyles = makeStyles({
  header: {
    background: 'grey',
    height: 'calc(2vw + 50px)',
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 'calc(2vw + 20px)',
    paddingTop: '10px',
  },
});

const Header = (props) => {

  const classes = useStyles();

  return <header className={classes.header}>{props.children}</header>;
};

export default Header;
