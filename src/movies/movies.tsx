import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

interface Movie {
  id: number;
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
      height: 650,
    },
    gridTile: {

    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  })
);

const Movies = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {props.movies.map(({ id, title, image, description }: Movie) => (
          <GridListTile key={id} className={classes.gridTile}>
            <img src={image} alt="`{Title} movie poster`" />
            <GridListTileBar
              title={title}
              subtitle={<span>{description}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Movies;
