import './App.css';
// import Item from './MyItem';
import React from 'react';

class StarWars extends React.Component {

  constructor(){
    super()
    this.state = {
      loadedChar: false,
      name: null,
      height: null,
      homeworld: null,
      imgurl: null
    }
  }

  getNewCharacter() {

    const randomeNum = Math.ceil(Math.random()*88)
    const url = `https://akabab.github.io/starwars-api/api/id/${randomeNum}.json`

    fetch(url)
      .then(Response => Response.json())
      .then(data => {
        console.log(data)
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          imgurl: data.image,
          loadedChar: true
        })  
      })

    
  }

  render(){

    return(
      <div>
        {
          this.state.loadedChar && 
          <div>
            <img src={this.state.imgurl} height="500px" alt="..."/>
            <h1>Name: {this.state.name}</h1>
            <p>Height[cm]: {this.state.height}</p>
            <p>homeworld: {this.state.homeworld}</p>
          </div>
        }
        
        <button 
          type="button" 
          onClick={() => this.getNewCharacter()} 
        >
          Randomize character
        </button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
