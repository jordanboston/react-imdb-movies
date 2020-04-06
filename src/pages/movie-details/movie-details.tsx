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
      movieDetails: {}
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
    return (
      <Card style={{ width: '25rem' }} className="mx-auto mt-3">
        <Card.Img variant="top" src={this.state.movieDetails.image} />
        <Card.Body>
          <Card.Title>{this.state.movieDetails.title}</Card.Title>
          <Card.Text>{this.state.movieDetails.plot}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Year: {this.state.movieDetails.year}</ListGroupItem>
          <ListGroupItem>Rated: {this.state.movieDetails.contentRating}</ListGroupItem>
          <ListGroupItem>IMDB Rating: {this.state.movieDetails.imDbRating} </ListGroupItem>
          <ListGroupItem>
            Meta Critic Rating: {this.state.movieDetails.metacriticRating}
          </ListGroupItem>
          <ListGroupItem>Directors: {this.state.movieDetails.directors}</ListGroupItem>
          <ListGroupItem>Stars: {this.state.movieDetails.stars}</ListGroupItem>
          <ListGroupItem>Languages: {this.state.movieDetails.languages}</ListGroupItem>
          <ListGroupItem>Genres: {this.state.movieDetails.genres}</ListGroupItem>
          <ListGroupItem>{this.state.movieDetails.tagline}</ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default MovieDetails;