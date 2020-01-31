import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import Rating from './components/Rating';
import MovieList from './components/MovieList';
import data from './data';

function App() {
  return (
    <div className="App">
      {<Header/>}
      {<MovieList/>}
      {data.map((item, index) => <MovieCard
      key={index}
      imagem={item.imagePath}
      title={item.title}
      subTitle={item.subtitle}
      story={item.storyline}
      rating={item.rating}
      />)}
      {<Rating/>}
    </div>
  );
}

export default App;
