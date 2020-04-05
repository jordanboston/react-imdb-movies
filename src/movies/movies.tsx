import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import styles from './movies.module.scss';

interface Movie {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Movies = (props: any) => {

  return (
    <React.Fragment>
      {props.movies.map(({ id, title, image, description }: Movie) => (
        <Col xs={12} sm={6} md={3} key={id}>
          <Card className="bg-dark text-white">
            <Card.Img src={image} variant="top" className="mb=5" alt="`{Title} movie poster`" />
            <Card.ImgOverlay>
              <Card.Text>
                <Button variant="light">
                  {title} {description}
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
