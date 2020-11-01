import React from 'react';
import Navbar from '../../Components/Navbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import data from '../../Backend/db';
import SendIcon from '@material-ui/icons/Send';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      padding: '2px',
    },
    details: {
      display: 'inline-block',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      flexWrap: 'wrap',
    },
    cover: {
      minWidth: 151,
      marginRight: '0px',
      padding: '2px',
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
      },
  }));  
console.log(data)
//const ans=products.filter(product=>product.id==props.match.params.id);
let cartItems = [];
let cartItemsIds = JSON.parse(localStorage.Ids).ids;
for(let i = 0; i<cartItemsIds.length; i++){
    cartItems = cartItems.concat(data.product.filter(product=>product.id==cartItemsIds[i]))
}
console.log(cartItems);
const CartPage = () => {
    const classes = useStyles();
    const theme = useTheme();
    return ( 
        <div>
            <Navbar />
            <h1>Cart</h1>
            {cartItems.map(item => (
    <Card className={classes.root}>
      <div className={classes.details}>
      
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
           {item.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            ${item.price}
          </Typography>
        </CardContent>
        <div className={classes.controls}>               
            <a href={`/d/${item.id}/${item.price}`}>
                <IconButton aria-label={`${item.id}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
            </a> 
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={item.image}
        title={item.title}
      />
    </Card>
    ))}
    <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon />}
      >
        CHECKOUT
    </Button>
        </div> );
}
 
export default CartPage;