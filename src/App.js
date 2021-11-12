
import './App.scss';
import React from 'react';
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import MovieDetails from './components/MovieDetails/MovieDetails'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/movie/:imdbID" exact element={<MovieDetails/>} />
          <Route path="*" exact element={<PageNotFound/>} />
        </Routes>
          </div>
        <Footer />
    </div>
  );
}

export default App;
