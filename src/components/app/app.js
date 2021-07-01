import React from 'react';

import Header from '../header/header';
import RandomPlanet from '../randomPlanet/randomPlanet';
import PeoplePage from '../peoplePage/peoplePage';
import PersonDetails from '../personDetails/personDetails';

import './app.css';
import ItemList from '../itemList/itemList';
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
        
        <div className="row mb2">
                <div className="col-md-6">
                <ItemList
                  onItemSelected={this.onPersonSelected} 
                  getData={this.swapi.getAllPlanets}
                  renderLabel={(item) => {
                            return `${item.name} (${item.diameter})`
                        }}          
                  />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
      </div>
    );

  }

}
