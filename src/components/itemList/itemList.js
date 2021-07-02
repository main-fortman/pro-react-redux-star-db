import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import withData from '../hocHelpers/withData';

import './itemList.css';

class ItemList extends Component {


  renderItems(arr) {
    return arr.map(item => {
      return (
        <li 
          className="list-group-item" 
          key={item.id}
          onClick={() => this.props.onItemSelected(item.id)}
        >
          {this.props.children(item)}
        </li>
      );
    })
  }

  render() {

   return (
      <ul className="item-list list-group">
        {this.renderItems(this.props.data)}
      </ul>
    );
  }
}



const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);