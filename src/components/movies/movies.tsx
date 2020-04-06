import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
// import styles from './movies.module.scss';

interface Movie {
  id: string;
  title: string;
  image: string;
  description: string;
}
interface Props {
  movies: [];
}

const movieIcon = <FontAwesomeIcon icon={faFilm} color="white" />;

const Movies = (props: Props) => {
  return (
    <React.Fragment>
      {props.movies.map(({ id, title, image }: Movie) => (
        <Col xs={12} sm={6} md={3} key={id}>
          <Card className="bg-dark text-white">
            <Card.Img src={image} variant="top" className="mb=5" alt={`${title} movie poster`} />
            <Card.ImgOverlay>
              <Card.Text>
                <Button variant="dark">
                  <Link to={`/movie/${id}`}>{ movieIcon }</Link>
                </Button>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default Movies;
