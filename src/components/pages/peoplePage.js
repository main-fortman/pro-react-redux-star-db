import React from 'react';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import Row from '../row/row';
import { PersonList } from '../sw-components/itemLists';
import PersonDetails from '../sw-components/personDetails';
import './peoplePage.css';

export default class PeoplePage extends React.Component {

    state = {
        selectedPerson: null
    }

    onPersonSelected = (id) => {
        this.setState({selectedPerson: id});
    }

    render() {
        const {selectedPerson} = this.state;
        return (
            <ErrorBoundary>
                <Row
                    left={
                        <PersonList onItemSelected={this.onPersonSelected} />
                    }
                    right={
                        <PersonDetails itemId={selectedPerson} />
                    }
                />
            </ErrorBoundary>
        )
    }
};