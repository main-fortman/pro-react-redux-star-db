import React from 'react';
import SwapiService from '../../services/SwapiService';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import Row from '../row/row';

import './peoplePage.css';
import { PersonList } from '../sw-components/itemLists';
import { PersonDetails } from '../sw-components/details';

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

        const itemList = <PersonList onItemSelected={this.onPersonSelected}/>

        const personDetails = <PersonDetails itemId={selectedPerson} />

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundary>
        )
    }
};