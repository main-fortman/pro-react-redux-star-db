import withSwapi from "../hocHelpers/withSwapi";
import ItemDetails, { Record } from '../itemDetails/itemDetails';

const StarshipDetails = (props) => {

    return (
        <ItemDetails {...props}>
            <Record field='model' label='Model'/>
            <Record field='cost_in_credits' label='Cost'/>
            <Record field='length' label='Length'/>
            <Record field='crew' label='Crew'/>
            <Record field='passengers' label='Passengers'/>
        </ItemDetails>

    )
}

const mapMethodsToProps = swapi => ({
    getData: swapi.getStarship,
    getImageUrl: swapi.getStarshipImage
});

export default withSwapi(mapMethodsToProps)(StarshipDetails);