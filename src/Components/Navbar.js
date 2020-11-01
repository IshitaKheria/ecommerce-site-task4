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
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const {logout} = useContext(UserContext);
  if(localStorage.isAuthenticated === 'true'){
    menu = <Menu 
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
              >
              <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
              <MenuItem>
                  <IconButton
                  aria-label="home page "
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                  >
                  <HomeIcon />
                  </IconButton>
                  <p>Home</p>
              </MenuItem>
              </Link>
             <Link to="/cart" style={{textDecoration: 'none', color: 'black'}}>
              <MenuItem>
                  <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                  >
                  <ShoppingCartIcon />
                  </IconButton>
                  <p>Cart</p>
              </MenuItem>
            </Link>
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
              <MenuItem>
                  <IconButton
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={logout}
                  >
                  <ExitToAppIcon />
                  <p>Log Out</p>
                  </IconButton>
              </MenuItem>
            </Link> </Menu>
          }else {
              menu = 
              <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}>
              <Link to="/login" style={{textDecoration: 'none', color: 'black'}}>
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
              </Link></Menu>}
  console.log("menu");
  console.log(menu);
  console.log("menu");

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
          <Typography variant="h6" className={classes.title}>
          <IconButton 
          aria-label="home page"
          aria-controls="home-page"
          aria-haspopup="true"
          color="inherit">
            <HomeIcon />
          </IconButton>
            E-commerce
          </Typography></Link>
          <Button aria-controls="simple-menu" color="inherit" aria-haspopup="true" onClick={handleClick}>
         Menu
        </Button>
          {menu}
        </Toolbar>
      </AppBar>
    </div>
  );
}