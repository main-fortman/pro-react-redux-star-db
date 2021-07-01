import React from 'react';
import SwapiService from '../../services/SwapiService';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import ItemList from '../itemList/itemList';
import PersonDetails from '../personDetails/personDetails';
import Row from '../row/row';

import './peoplePage.css';

export default class PeoplePage extends React.Component {
    
    swapi = new SwapiService();

    state = {
        selectedPerson: 3
    }

    onPersonSelected = (id) => {
        this.setState({selectedPerson: id});
    }

    render() {
        const {selectedPerson} = this.state;

        const itemList = <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapi.getAllPeople}
            >
            {(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
            </ItemList>

        const personDetails = <PersonDetails personId={selectedPerson}/>

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundary>
        )
    }
};