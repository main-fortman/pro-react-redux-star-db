import React from 'react';
import { withRouter } from 'react-router-dom';
import { StarshipList } from '../sw-components/itemLists';
import './peoplePage.css';

const StarshipsPage = ({history}) => {
    return (
        <StarshipList
            onItemSelected={(id) => {
                // history.push(`/starships/${itemId}`); absolute path
                history.push(id);
            }}
        />
    )
};

export default withRouter(StarshipsPage);