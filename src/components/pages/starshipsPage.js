import React from 'react';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import Row from '../row/row';
import { StarshipList } from '../sw-components/itemLists';
import StarshipDetails from '../sw-components/starshipDetails';
import './peoplePage.css';

export default class StarshipsPage extends React.Component {

    state = {
        selectedStarship: null
    }

    onStarshipSelected = (id) => {
        this.setState({selectedStarship: id});
    }

    render() {
        const {selectedStarship} = this.state;
        return (
            <ErrorBoundary>
                <Row
                    left={
                        <StarshipList onItemSelected={this.onStarshipSelected} />
                    }
                    right={
                        <StarshipDetails itemId={selectedStarship} />
                    }
                />
            </ErrorBoundary>
        )
    }
};