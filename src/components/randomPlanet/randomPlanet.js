import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../errorIndicator/errorIndicator';

import './randomPlanet.css';

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 30000 
  }
  
  static propTypes = {
    updateInterval: (props, propName, componentName) => {
      const value = props[propName];
      if (typeof calue === 'number' && !isNaN(value)) {
        return null;
      }

      return new Error(`${componentName}: ${propName} must be number`);
    }
  }

  swapi = new SwapiService();

  intervalId = 0;

  state = {
    planet: {},
    loading: true,
    error: false
  }
  
  componentDidMount() {
    this.updatePlanet();
    this.intervalId = setInterval(this.updatePlanet, this.props.updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updatePlanet = () => {
    const id = Math.ceil(Math.random() * 25);
    this.swapi.getPlanet(id)
      .then(planet => {
        this.setState({planet, loading: false});
      })
      .catch(e => {
        this.setState({error: true, loading: false});
      });
  }

  render() {
    const {planet, loading, error} = this.state;
    const content = loading ? 
      <Spinner/> : 
      (
        error ? 
          <ErrorIndicator/> :
          <PlanetView planet={planet}/>

      );

    return (
      <div className="random-planet jumbotron rounded">
        {content}
      </div>

    );
  }
}



const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;
  return (
    <>
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
    </>
  )
}