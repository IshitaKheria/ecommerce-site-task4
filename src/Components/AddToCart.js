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

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const [message, setOpen] = React.useState(false);
  const {cart , handleCart} = useContext(UserContext);
  const [box,setBox] = React.useState(cart.open)
  let Message = cart.message;
  console.log(box)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    
  };

  return (
    <div className={classes.root}>
      <Button onClick={handleCart}>
        <Fab color="secondary" size="small" className={classes.margin}>
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
