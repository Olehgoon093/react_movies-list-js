/* eslint-disable max-len */

import './App.scss';
import moviesFromServer from './api/movies.json';
import { MovieList } from './components/MovieList';

export const App = () => (
  <div className="App">
    <h1>MovieList</h1>
    <MovieList moviesFromServer={moviesFromServer} />
  </div>
);
