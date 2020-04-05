import React from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HttpClient from './utils/HttpClient';
import { API_KEY } from './config';
import Header from './header/header';
import Movies from './movies/movies';
import Search from './search/search';

interface Props { }
interface State {
  movies: [];
  isLoading: boolean;
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props as any);

    this.state = {
      movies: [],
      isLoading: false,
    };
  }

  getMovie = async (expression: string) => {
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

  render() {
    return (
      <div className="App">
        <Header />
        <Container fluid>
          <Row>
            <Search handleSendRequest={this.getMovie} loading={this.state.isLoading} />
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
