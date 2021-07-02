import React from 'react';
import SwapiService from '../../services/SwapiService';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import ItemList from '../itemList/itemList';
import ItemDetails, {Record} from '../itemDetails/itemDetails';
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

        const itemList = <ItemList onItemSelected={this.onPersonSelected}>
            {(item) => `${item.name} (${item.gender}, ${item.birthYear})`}
            </ItemList>

        const personDetails = <ItemDetails
            itemId={selectedPerson}
            getData={this.swapi.getPerson}
            getImageUrl={this.swapi.getPersonImage}
        >
            <Record field='gender' label='Gender'/>
            <Record field='birthYear' label='Birth Year'/>
            <Record field='eyeColor' label='Eye Color'/>
        </ItemDetails>

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundary>
        )
    }
};