import React from 'react';

import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import PeoplePage from '../peoplePage/peoplePage';
import './app.css';
import SwapiService from '../../services/SwapiService';

export default class App extends React.Component {

  swapi = new SwapiService();

  state = {
    showRandomPlanet: true,
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
  
        <PeoplePage />

      </div>
    );

  }

}
