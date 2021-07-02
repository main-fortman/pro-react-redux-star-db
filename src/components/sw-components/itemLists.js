import React from 'react';
import SwapiService from '../../services/SwapiService';
import withData from '../hocHelpers/withData';
import ItemList from '../itemList/itemList';


const {getAllPeople, getAllPlanets, getAllStarships} = new SwapiService();

export const PersonList = withData(ItemList, getAllPeople);
export const PlanetList = withData(ItemList, getAllPlanets);
export const StarshipList = withData(ItemList, getAllStarships);