import React, { Component } from 'react';
import SwapiService from '../../services/SwapiService';
import Spinner from '../spinner/spinner';

import './itemDetails.css';

export default class ItemDetails extends Component {

  swapi = new SwapiService();

  state = {
    item: null,
    loading: false,
    image: null
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.itemId !== this.props.itemId ||
        prevProps.getData !== this.props.getData) {
      this.updateItem();
    }
  }

  updateItem() {
    const {itemId, getData, getImageUrl} = this.props;
    if (!itemId) {
      return;
    }

    this.setState({loading: true});

    getData(itemId).then(item => {
      this.setState(
        {
          item,
          loading: false,
          image: getImageUrl(item)
        }
      );
    })
  }

  render() {

    const {item, loading, image} = this.state;
    let content = <span>Select a item from a list</span>;

    if (loading) {
      content = <Spinner/>;
    } else if (item) {
      const records = React.Children.map(
        this.props.children,
        child => React.cloneElement(child, {item}));
      content = <ItemView item={item} image={image} records={records}/>
    }

    return ( 
      <div className="item-details card">
        {content}
      </div>
    )
  }
}

function ItemView({item, image, records}) {
  return (
    <>
      <img className="item-image"
            alt='item details'
            src={image} />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
          {records}
          </ul>
        </div>
    </>
  )
}

export const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  )
}