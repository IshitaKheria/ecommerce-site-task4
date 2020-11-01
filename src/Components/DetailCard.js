import React, { useState, useEffect , useContext} from 'react';
import CustomizedSnackbars from './AddToCart';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import data from '../Backend/db';
import UserContext from '../Context/UserContext';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
      maxWidth: "470px",
      margin: "auto",
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  
  

const DetailCard = (props) => {
  //console.log("data")
  //console.log(props.match.params.id)
  //console.log(props)
  //console.log(data.product);
  let products = data.product;
  //console.log(products);
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [product,setProduct] = useState({id:"0", title: null, price: null, image: null});
  console.log(props.match.params.id)
  const {cart,setCart} = useContext(UserContext);
  
  useEffect(()=>{
    const ans=products.filter(product=>product.id==props.match.params.id);
    console.log(ans[0]);
    setProduct(ans[0]);
    
  },[])

    const handleExpandClick = () => {
        setExpanded(!expanded);
  };
  var cartIds = JSON.parse(localStorage.Ids).ids

  const handleCart = (e)=>{
    console.log("Add to cart clicked!")
    //console.log(cart)
    if(cart.add == 0){
        setCart({change: cart.change, open: !cart.open , message : "Item added successfully!", add: 1 ,color:"secondary", productId : cart.productId.concat(product.id)})
        cartIds = cartIds.concat(product.id)
        
        console.log(cartIds)
        localStorage.setItem("Ids",JSON.stringify({'ids': cartIds}) );
      }
      else{
        setCart({change: cart.change, open: !cart.open , message : "Item deleted successfully!", add: 0 ,color:"primary", productId: cart.productId.filter(function(id){ return id != product.id; })})
        cartIds = cartIds.filter(function(id){ return id != product.id; }) == undefined ? [null] : cartIds.filter(function(id){ return id != product.id; });
        localStorage.setItem("Ids",JSON.stringify({'ids': cartIds}));
      }    
    } 
    //console.log(cart)
    cartIds = JSON.parse(localStorage.Ids).ids //since it was becoming undefined 
    //console.log(cartIds)

    return ( 
      <div>
        <Navbar />
      
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {product.id}
          </Avatar>
        }
        action={
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        }
        title={product.title}
      />
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Price : ${product.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <CustomizedSnackbars handleCart={handleCart}/>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>Category: {product.category} </Typography>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {product.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
        
     );
}
 
export default DetailCard;