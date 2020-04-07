import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HttpClient from '../../utils/HttpClient';
import Alert from 'react-bootstrap/Alert';
import { API_KEY } from '../../config';
import Movies from '../../components/movies/movies';
import Search from '../../components/search/search';
import Reveal from 'react-reveal/Reveal';

interface Props {}
interface State {
  movies: [];
  isLoading: boolean;
  showAlert: boolean;
}
class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props as any);

    this.state = {
      movies: [],
      isLoading: false,
      showAlert: false,
    };
  }

  getMovie = (expression: string) => {
    let isLoading: boolean = true;
    this.setState({ isLoading });

    const request = HttpClient.get(`/en/API/Search/${API_KEY}/${expression}`)
      .then((response) => {
        if (response) {
          isLoading = false;
          this.setState({ isLoading });

          const movies: [] = response.results;
          const showAlert = movies ? true : false
          this.setState({ showAlert });
          this.setState({ movies });
        }
        return response;
      })
      .catch((error) => {
        console.log('error', error);
      });
    return request;
  };

  render () {
    let movies: any = null;
    let alert: any = null;

    if (this.state.showAlert) {
      alert = (
        <Reveal effect="fadeInUp" effectOut="fadeOutLeft">
          <div className="mx-auto">
            <Alert variant="warning">Did not find anything in that search.</Alert>
          </div>
        </Reveal>
      );
    }

    if (this.state.movies) {
      movies = (
        <Movies movies={this.state.movies} />
      );
    }

    return (
      <Container fluid>
        <Row>
          <Search handleSendRequest={this.getMovie} loading={this.state.isLoading} />
        </Row>
        <Row>
          {movies}
          {alert}
        </Row>
      </Container>
    );
  }
}

export default Home;
