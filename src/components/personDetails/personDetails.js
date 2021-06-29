import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../spinner/spinner';

import './personDetails.css';

export default class PersonDetails extends Component {

  swapi = new SwapiService();

  state = {
    person: null,
    loading: false
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

    this.setState({loading: true});

    this.swapi.getPerson(personId)
      .then(person => {
        this.setState({person, loading: false});
      })
  }

  render() {

    const {person, loading} = this.state;
    let content = <span>Select a person from a list</span>;

    if (loading) {
      content = <Spinner/>;
    } else if (person) {
      content = <PersonView person={person}/>
    }

    return (
      <div className="person-details card">
        {content}
      </div>
    )
  }
}

function PersonView({person}) {
  const {id, name, gender, birthYear, eyeColor} = person;
  return (
    <>
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
    </>
  )
}