import SwapiService from "../../services/SwapiService"
import ItemDetails, { Record } from '../itemDetails/itemDetails';

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage,
    } = new SwapiService();

export const PersonDetails = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPerson}
            getImageUrl={getPersonImage}
        >
            <Record field='gender' label='Gender'/>
            <Record field='birthYear' label='Birth Year'/>
            <Record field='eyeColor' label='Eye Color'/>
        </ItemDetails>
    )
}

export const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}
        >
            <Record field='population' label='Population'/>
            <Record field='rotation_period' label='Rotation Period'/>
            <Record field='diameter' label='Diameter'/>
        </ItemDetails>
    )
}

export const StarshipDetails = ({itemId}) => {
    return (
        <ItemDetails
            itemId={itemId}
            getData={getStarship}
            getImageUrl={getStarshipImage}
        >
            <Record field='model' label='Model'/>
            <Record field='cost_in_credits' label='Cost'/>
            <Record field='length' label='Length'/>
            <Record field='crew' label='Crew'/>
            <Record field='passengers' label='Passengers'/>
        </ItemDetails>
    )
}