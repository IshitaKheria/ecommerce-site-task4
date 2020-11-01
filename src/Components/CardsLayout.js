import data from '../Backend/db';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import UserContext from '../Context/UserContext';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  gridListTile: {
      minHeight: '280px',
      minWidth: '280px',
      maxWidth: '320px',
  }
}));
//console.log(data);
const tileData = data.product;
//console.log(tileData);

export default function AdvancedGridList() {
  const classes = useStyles();
  const {cart} = useContext(UserContext);
  //console.log(cart)

  
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.id} className={classes.gridListTile}>
            <img src={tile.image} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <a href={`/d/${tile.id}/${tile.price}`}>
                <IconButton aria-label={`${tile.id}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton></a>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}