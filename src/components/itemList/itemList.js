import React, { Component } from 'react';
import Spinner from '../spinner/spinner';

import './itemList.css';

export default class ItemList extends Component {

  state = {
    itemsList: null
  }

  componentDidMount() {
    const { getData } = this.props;
    getData().then(itemsList => this.setState({itemsList}));
  }


  renderItems(arr) {
    return arr.map(item => {
      return (
        <li 
          className="list-group-item" 
          key={item.id}
          onClick={() => this.props.onItemSelected(item.id)}
        >
          {this.props.renderLabel(item)}
        </li>
      );
    })
  }

  render() {

    const {itemsList} = this.state;
    if (!itemsList) {
      return <Spinner/>;
    }

    return (
      <ul className="item-list list-group">
        {this.renderItems(itemsList)}
      </ul>
    );
  }
}