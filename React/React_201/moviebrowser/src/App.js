import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import { Switch, Route } from 'react-router';
import SearchView from './components/SearchView';



function App() {

  const [ searchResults, setSearchResults ] = useState([]);
  const [ searchText, setSearchText ] = useState('');

  useEffect(()=>{
    if(searchText){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=ed6047d73986167dda2f621081816462&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(Response => Response.json())
        .then(data=>{
          //console.log(data)
          setSearchResults(data.results)
        })

    }
  },[searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <AboutView />
        </Route>
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
      </Switch>
      

    </div>
  );
}

export default App;
