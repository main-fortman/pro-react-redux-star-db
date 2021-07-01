import React from 'react';
import SwapiService from '../../services/SwapiService';
import ErrorIndicator from '../errorIndicator/errorIndicator';
import ItemList from '../itemList/itemList';
import PersonDetails from '../personDetails/personDetails';
import Row from '../row/row';

import './peoplePage.css';

export default class PeoplePage extends React.Component {
    
    swapi = new SwapiService();

    state = {
        selectedPerson: 3,
        hasError: false
    }

    componentDidCatch() {
        this.setState({hasError: true});
    }

    onPersonSelected = (id) => {
        this.setState({selectedPerson: id});
    }

    render() {
        const {selectedPerson, hasError} = this.state;

        if (hasError) {
            return <ErrorIndicator/>
        }
        
        const itemList = <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapi.getAllPeople}
            renderLabel={(item) => {
                return `${item.name} (${item.gender}, ${item.birthYear})`
            }}
        />

        const personDetails = <PersonDetails personId={selectedPerson}/>

        return (
            <Row left={itemList} right={personDetails}/>
        )
    }

};

