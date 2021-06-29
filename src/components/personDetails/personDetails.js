import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';

import './personDetails.css';

export default class PersonDetails extends Component {

  swapi = new SwapiService();

  state = {
    person: null
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.personId !== this.props.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const {personId} = this.props;
    if (!personId) {
      return;
    }

    this.swapi.getPerson(personId)
      .then(person => {
        this.setState({person});
      })
  }

  render() {

    const {person} = this.state;

    if (!person) {
      return <span>Select a person from a list</span>
    }

    const {id, name, gender, birthYear, eyeColor} = person;

    return (
      <div className="person-details card">
        <img className="person-image"
          alt='person'
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}