import React from 'react';
import './App.css';
import HttpClient from './utils/HttpClient';
import { API_KEY } from './config';
import Movie from './movie/movie';
import Search from './search/search';

interface Props { }
interface State {
  movies: [];
  title: string;
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props as any);

    this.state = {
      movies: [],
      title: '',
    };
  }

  getMovie = async (title: string) => {
    const request = HttpClient.get(`/en/API/Search/${API_KEY}/${title}`)
      .then((response) => {
        console.log('Response', response);
        if (response) {
          console.log('Response', response);
          const movies: any = response.body.Search;
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
        <header className="App-header">
          <Search handleSendRequest={this.getMovie} />

          {this.state.movies.map((movie: any) => {
            return <Movie {...movie} />;
          })}
        </header>
      </div>
    );
  }
}

export default App;
