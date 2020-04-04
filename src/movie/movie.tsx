import React from 'react';
import './movie.css';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
interface MovieProps {
  title: string;
  image: string;
  description: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  })
);

const Movie = ({title, image, description}: MovieProps) => {
  const classes: any = useStyles();

  return (
    <GridList cellHeight={180} className={classes.gridList}>
      <GridListTile>
        <img src={image} alt="`{Title} movie poster`" />
        <GridListTileBar
          title={title}
          subtitle={
            <span>
              {description}
            </span>
          }
          actionIcon={
            <IconButton aria-label={`info about ${title}`} className={classes.icon}>
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
      )}
    </GridList>
  );
}

export default Movie;
