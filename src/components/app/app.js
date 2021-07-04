import React from 'react';

import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import PeoplePage from '../pages/peoplePage';
import './app.css';
import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/dummySwapiService';
import { SwapiProvider } from '../swapiServiceContext/swapiServiceContext';
import PlanetsPage from '../pages/planetsPage';
import StarshipsPage from '../pages/starshipsPage';

export default class App extends React.Component {

  state = {
    showRandomPlanet: true,
    swapi: new SwapiService()
  }

  onClickToggleRandomPlanet() {
    this.setState(({showRandomPlanet}) => ({showRandomPlanet: !showRandomPlanet}));
  }

  onServiceChange = () => {
    this.setState(({swapi}) => {
      const Serv = swapi instanceof SwapiService ? DummySwapiService : SwapiService;
      return { swapi: new Serv() };
    })
  }

  render() {
    const {showRandomPlanet, swapi} = this.state;

    return (
      <SwapiProvider value={swapi}>
        <div>
          <Header onServiceChange={this.onServiceChange}/>
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
          
          <PeoplePage/>
          <PlanetsPage/>
          <StarshipsPage/>

        </div>
      </SwapiProvider>
    );

  }

}
