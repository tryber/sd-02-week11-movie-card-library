import React from 'react';
import './App.css';
import Header from './components/Header'
import movies from './data'
import MovieList from './components/MovieList'

function App() {
  return (
    <div className="body">
    <Header/> 
     <MovieList movies={movies} kelly='nada'/>
    </div>
  );
}

export default App;
