import React from 'react';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import Row from '../row/row';
import { PlanetList } from '../sw-components/itemLists';
import PlanetDetails from '../sw-components/planetDetails';
import './peoplePage.css';

export default class PlanetsPage extends React.Component {

    state = {
        selectedPlanet: null
    }

    onPlanetSelected = (id) => {
        this.setState({selectedPlanet: id});
    }

    render() {
        const {selectedPlanet} = this.state;
        return (
            <ErrorBoundary>
                <Row
                    left={
                        <PlanetList onItemSelected={this.onPlanetSelected} />
                    }
                    right={
                        <PlanetDetails itemId={selectedPlanet} />
                    }
                />
            </ErrorBoundary>
        )
    }
};