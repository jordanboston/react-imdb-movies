import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header';
import Home from './pages/home/home';
import MovieDetails from './pages/movie-details/movie-details';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:id" component={MovieDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
