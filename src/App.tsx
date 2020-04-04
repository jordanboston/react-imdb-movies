import React from 'react';
import './App.css';
import HttpClient from './utils/HttpClient';
import { API_KEY } from './config';
import Container from '@material-ui/core/Container';
import Movie from './movie/movie';
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

  getMovie = async (title: string) => {
    const request = HttpClient.get(`/en/API/Search/${API_KEY}/${title}`)
      .then((response) => {
        if (response) {
          console.log('Response', response);
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
        <Container maxWidth="lg" style={{ margin: '0 auto' }}>
          <Search handleSendRequest={this.getMovie} />

          {this.state.movies.map(({ id, ...movie }: any) => {
            return <Movie key={id} {...movie} />;
          })}
        </Container>
      </div>
    );
  }
}

export default App;
