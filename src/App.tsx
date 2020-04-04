import React from 'react';
import './App.css';
import HttpClient from './utils/HttpClient';
import { API_KEY } from './config';
import Container from '@material-ui/core/Container';
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
        <Container maxWidth="lg" style={{ margin: '0 auto' }}>
          <Search handleSendRequest={this.getMovie} />

          <Movies movies={this.state.movies} />
        </Container>
      </div>
    );
  }
}

export default App;
// export default withStyles(useStyles,  { withTheme: true })(App);
