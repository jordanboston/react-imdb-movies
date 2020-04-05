import React from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HttpClient from './utils/HttpClient';
import { API_KEY } from './config';
import Movies from './movies/movies';
import Search from './search/search';

interface Props { }
interface State {
  movies: [];
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props as any);

    this.state = {
      movies: [],
    };
  }

  getMovie = async (expression: string) => {
    const request = HttpClient.get(`/en/API/Search/${API_KEY}/${expression}`)
      .then((response) => {
        if (response) {
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

  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Search handleSendRequest={this.getMovie} />
          </Row>
          <Row>
            <Movies movies={this.state.movies} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
