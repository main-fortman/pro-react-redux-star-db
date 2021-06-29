import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';

import './randomPlanet.css';

export default class RandomPlanet extends Component {

  swapi = new SwapiService();

  state = {
    planet: {}
  
  }

  constructor() {
    super();
    this.updatePlanet();
    
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapi.getPlanet(id)
      .then(planet => {
        this.setState({planet});
      });
  }

  render() {

    const {id, name, population, rotationPeriod, diameter} = this.state.planet;

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             alt='planet'
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}