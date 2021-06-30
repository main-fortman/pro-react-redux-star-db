import React from 'react';
import ErrorIndicator from '../errorIndicator/errorIndicator';
import ItemList from '../itemList/itemList';
import PersonDetails from '../personDetails/personDetails';

import './peoplePage.css';

export default class PeoplePage extends React.Component {
    
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
        
        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected} />
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={selectedPerson}/>
                </div>
            </div>
        )
    }

};
