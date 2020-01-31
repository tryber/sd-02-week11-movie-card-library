import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import data from './data'

function App() {
  return (
    <div className="App">
      <Header />
      <MovieCard />
    </div>
  );
}

export default App;
