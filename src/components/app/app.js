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
import { BrowserRouter, Route } from 'react-router-dom';
import StarshipDetails from '../sw-components/starshipDetails';

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
        <BrowserRouter>
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

            <Route path='/' exact render={() => <h2>Welcome to StarDB</h2>}/>
            <Route path='/people/:id?' component={PeoplePage}/>
            <Route path='/planets' component={PlanetsPage}/>
            <Route path='/starships' exact component={StarshipsPage}/>
            <Route
              path='/starships/:id'
              render={({match}) => {
                return <StarshipDetails itemId={match.params.id} />
              }}
              />

          </div>
        </BrowserRouter>

      </SwapiProvider>
    );

  }

}
