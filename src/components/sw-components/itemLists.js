
import withData from '../hocHelpers/withData';
import withSwapi from '../hocHelpers/withSwapi';
import ItemList from '../itemList/itemList';


const withChildFunction = (fn) => (Wrapped) => {
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

const mapPersonMethodsToProps = swapi => ({
    getData: swapi.getAllPeople
});
const mapPlanetMethodsToProps = swapi => ({
    getData: swapi.getAllPlanets
});
const mapStarshipMethodsToProps = swapi => ({
    getData: swapi.getAllStarships
});

export const PersonList = withSwapi(mapPersonMethodsToProps)(
    withData(
        withChildFunction(renderNameAndAge)(ItemList)
    )
);
export const PlanetList = withSwapi(mapPlanetMethodsToProps)(
    withData(
        withChildFunction(renderName)(ItemList)
    )
);
export const StarshipList = withSwapi(mapStarshipMethodsToProps)(
    withData(
        withChildFunction(renderNameAndModel)(ItemList)
    )
);