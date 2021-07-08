import React from 'react';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from '../errorBoundary/errorBoundary';
import Row from '../row/row';
import { PersonList } from '../sw-components/itemLists';
import PersonDetails from '../sw-components/personDetails';
import './peoplePage.css';

const PeoplePage  = ({history, match}) => {

    const onPersonSelected = (id) => {
        history.push(id.toString());
    }

    return (
        <ErrorBoundary>
            <Row
                left={
                    <PersonList onItemSelected={onPersonSelected} />
                }
                right={
                    <PersonDetails itemId={match.params.id} />
                }
            />
        </ErrorBoundary>
    )
};

export default withRouter(PeoplePage);