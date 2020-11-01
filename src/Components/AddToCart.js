import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import UserContext from '../Context/UserContext';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props) {
  const classes = useStyles();
  const {cart } = useContext(UserContext);
  let Message = cart.message;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    
  };

  return (
    <div className={classes.root}>
      <Button onClick={props.handleCart}>
        <Fab color={cart.color} size="small" className={classes.margin}>
          <AddShoppingCartIcon />
        </Fab>
      </Button>
      <Snackbar open={cart.open} autoHideDuration={600} >
        <Alert severity="success">
          {Message}
        </Alert>
      </Snackbar>  
    </div>
  );
}
