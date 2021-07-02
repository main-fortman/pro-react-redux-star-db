import withSwapi from "../hocHelpers/withSwapi";
import ItemDetails, { Record } from '../itemDetails/itemDetails';

const PlanetDetails = (props) => {

    return (
        <ItemDetails {...props}>
            <Record field='population' label='Population'/>
            <Record field='rotation_period' label='Rotation Period'/>
            <Record field='diameter' label='Diameter'/>
        </ItemDetails>
    )
}

const mapMethodsToProps = swapi => ({
    getData: swapi.getPlanet,
    getImageUrl: swapi.getPlanetImage
});

export default withSwapi(mapMethodsToProps)(PlanetDetails);