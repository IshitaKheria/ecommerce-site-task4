import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {MenuItem , Menu} from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import UserContext from '../Context/UserContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  let menu = null;
  const {logout} = useContext(UserContext);
  if(localStorage.isAuthenticated === 'true'){
    menu = /* <Menu
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id='primary-search-account-menu-mobile'
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
             <Link to="/cart" style={{textDecoration: 'none', color: 'white'}}>
              <MenuItem>
                  <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                  >
                  <AccountCircle />
                  </IconButton>
                  <p>LOGIN</p>
              </MenuItem>
            </Link>
            <Link to="/cart" style={{textDecoration: 'none', color: 'white'}}>
              <MenuItem>
                  <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={logout}
                  >
                  <ExitToAppIcon />
                  </IconButton>
              </MenuItem>
            </Link> </Menu>*/
            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
              <MenuItem>
                  <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={logout}
                  >
                  <ExitToAppIcon />
                  </IconButton>
              </MenuItem>
            </Link>
          }else {
              menu = 
              <Link to="/login" style={{textDecoration: 'none', color: 'white'}}>
              <MenuItem>
                  <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                  >
                  <AccountCircle />
                  </IconButton>
                  <p>LOGIN</p>
              </MenuItem>
              </Link>}
  console.log("menu");
  console.log(menu);
  console.log("menu");

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
        <MenuItem>
          <IconButton 
          aria-label="home page"
          aria-controls="home-page"
          aria-haspopup="true"
          color="inherit">
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            E-commerce
          </Typography>
          </MenuItem>
          </Link>
          {menu}
        </Toolbar>
      </AppBar>
    </div>
  );
}