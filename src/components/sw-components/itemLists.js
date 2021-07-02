import SwapiService from '../../services/SwapiService';
import withData from '../hocHelpers/withData';
import ItemList from '../itemList/itemList';


const {getAllPeople, getAllPlanets, getAllStarships} = new SwapiService();


const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndAge = ({ name, birthYear }) => <span>{name} ({birthYear})</span>;
const renderNameAndModel = ({ name, model }) => <span>{name} ({model})</span>;

export const PersonList = withData(withChildFunction(ItemList, renderNameAndAge), getAllPeople);
export const PlanetList = withData(withChildFunction(ItemList, renderName), getAllPlanets);
export const StarshipList = withData(withChildFunction(ItemList, renderNameAndModel), getAllStarships);