import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './itemList.css';

class ItemList extends Component {

  
  static defaultProps = {
    onItemSelected: (id) => {console.log(id);}
  };

  static propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
  };

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

export default ItemList;