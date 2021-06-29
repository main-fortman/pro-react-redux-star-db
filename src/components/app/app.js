import React from 'react';

import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import ItemList from '../itemList/itemList';
import PersonDetails from '../personDetails/personDetails';

import './app.css';

export default class App extends React.Component {

  state = {
    showRandomPlanet: true
  }

  onClickToggleRandomPlanet() {
    this.setState(({showRandomPlanet}) => ({showRandomPlanet: !showRandomPlanet}));
  }

  render() {
    const {showRandomPlanet} = this.state;

    return (
      <div>
        <Header />
        <button 
          type='button' 
          className='btn btn-outline-secondary'
          onClick={this.onClickToggleRandomPlanet.bind(this)}
        >
          Toggle Random Planet
        </button>

        {
          showRandomPlanet ? <RandomPlanet /> : null 
        }
  
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList />
          </div>
          <div className="col-md-6">
            <PersonDetails />
          </div>
        </div>
      </div>
    );

  }

}
