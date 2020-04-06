import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HttpClient from '../../utils/HttpClient';
import Alert from 'react-bootstrap/Alert';
import { API_KEY } from '../../config';
import Movies from '../../components/movies/movies';
import Search from '../../components/search/search';

interface Props {}
interface State {
  movies: [];
  isLoading: boolean;
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props as any);

    this.state = {
      movies: [],
      isLoading: false,
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

          const movies: any = response.results;
          this.setState({ movies });
        }
        return response;
      })
      .catch((error) => {
        console.log('error', error);
      });
    return request;
  };

  notice = () => {
    return (
      <Alert variant="warning" className="mx-auto">
        Did not find anything in that search.
      </Alert>
    );
  };

  // searchResultComponent = () => {
  //   console.log(this.state.movies);
  //   if (this.state.movies) {
  //     return <Movies movies={this.state.movies} />;
  //   }
  //   return this.notice();
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Search handleSendRequest={this.getMovie} loading={this.state.isLoading} />
        </Row>
        <Row>
          <Movies movies={this.state.movies} />
        </Row>
      </Container>
    );
  }
}

export default Home;
