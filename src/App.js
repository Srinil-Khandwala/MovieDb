import React from 'react';
//route
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//components
import Header from './components/Header/index';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

//style
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
