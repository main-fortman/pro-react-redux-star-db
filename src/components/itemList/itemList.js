import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../spinner/spinner';

import './itemList.css';

export default class ItemList extends Component {

  swapi = new SwapiService();

  state = {
    peopleList: null
  }

  componentDidMount() {
    this.swapi.getAllPeople()
      .then(peopleList => this.setState({peopleList}));
  }


  renderItems(arr) {
    return arr.map(item => {
      return (
        <li 
          className="list-group-item" 
          key={item.id}
          onClick={() => this.props.onItemSelected(item.id)}
        >
          {item.name}
        </li>
      );
    })
  }

  render() {

    const {peopleList} = this.state;
    if (!peopleList) {
      return <Spinner/>;
    }

    return (
      <ul className="item-list list-group">
        {this.renderItems(peopleList)}
      </ul>
    );
  }
}