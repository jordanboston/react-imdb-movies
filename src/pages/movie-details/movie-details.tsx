import React from 'react';
import HttpClient from '../../utils/HttpClient';
import { API_KEY } from '../../config';
import { movieDetailsInterface } from '../../interfaces/movieDetailsInterface';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

interface Props {
  id: string;
  match: any;
}
interface State {
  movieDetails: movieDetailsInterface;
}

class MovieDetails extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props as any);
    this.state = {
      movieDetails: {
        title: '',
      }
    };
  }

  componentDidMount() {
    this.getDetails(this.props.match.params.id);
  }

  getDetails = (id: string) => {
    const request = HttpClient.get(
      `/en/API/Title/${API_KEY}/${id}/FullActor,Trailer,Ratings,`
    )
      .then((response) => {
        if (response) {
          const movieDetails = response;
          this.setState({ movieDetails });
          // console.table(this.state.movieDetails, ['value']);
        }
        return response;
      })
      .catch((error) => {
        console.log('error', error);
      });
    return request;
  };

  render() {
    const {
      image, title, plot, year, contentRating, imDbRating, metacriticRating, directors,
      stars, languages, genres, tagline
    } = this.state.movieDetails;
    return (
      <Card style={{ width: '25rem' }} className="mx-auto mt-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{plot}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Year: {year}</ListGroupItem>
          <ListGroupItem>Rated: {contentRating}</ListGroupItem>
          <ListGroupItem>IMDB Rating: {imDbRating} </ListGroupItem>
          <ListGroupItem>
            Meta Critic Rating: {metacriticRating}
          </ListGroupItem>
          <ListGroupItem>Directors: {directors}</ListGroupItem>
          <ListGroupItem>Stars: {stars}</ListGroupItem>
          <ListGroupItem>Languages: {languages}</ListGroupItem>
          <ListGroupItem>Genres: {genres}</ListGroupItem>
          <ListGroupItem>{tagline}</ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default MovieDetails;